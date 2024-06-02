import json
import time
from datetime import datetime
from datetime import time as dtime

import requests
import schedule

base_url = "https://api.hamsterkombat.io/clicker"

token = "1717254327445e87Q4fmfmZRB1KahLu5XVAvT9yYOdJWO3TGKCozq4tT1NTENmQOUdebGhJ6oEItu890214723"
name = "User 01"


headers = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Accept-Language": "en-US,en;q=0.9,uz;q=0.8",
    "Authorization": f"Bearer {token}",
    "Connection": "keep-alive",
    "Host": "api.hamsterkombat.io",
    "Origin": "https://hamsterkombat.io",
    "Referer": "https://hamsterkombat.io/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
    "sec-ch-ua": '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"macOS"',
}

post_headers = {
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Accept-Language": "en-US,en;q=0.9,uz;q=0.8",
    "Connection": "keep-alive",
    "Host": "api.hamsterkombat.io",
    "Origin": "https://hamsterkombat.io",
    "Referer": "https://hamsterkombat.io/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
    "accept": "application/json",
    "authorization": f"Bearer {token}",
    "content-type": "application/json",
    "sec-ch-ua": '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"macOS"',
}


def send(text):
    url = "https://api.telegram.org/bot7281452319:AAGAapxooSfOuG_7J4R_VJOZSq-NQesACNQ/sendMessage"
    params = {
        "chat_id": "890214723",
        "text": text,  # Replace this with the actual server name or retrieve it dynamically
    }
    requests.post(url, params=params)


def get_data(url, data=None, customHeaders=None):

    try:
        if data:
            response = requests.post(
                f"{base_url}{url}",
                json=data,
                headers=post_headers if not customHeaders else customHeaders,
            )
        else:
            response = requests.post(
                f"{base_url}{url}",
                headers=headers if not customHeaders else customHeaders,
            )

        string_data = response.content.decode("utf-8")

        return json.loads(string_data)
    except Exception as e:
        # print(e)
        return None


def sync():
    return get_data("/sync")


def myUpgrades(sync):
    return [str(pr) for pr in sync["clickerUser"]["upgrades"]]


def upgrades():
    sync_data = sync()
    myUpgradesList = myUpgrades(sync_data)
    dict_data = get_data("/upgrades-for-buy")
    other_list = []

    print(sync_data["clickerUser"]["lastSyncUpdate"])

    for item in dict_data["upgradesForBuy"]:
        if (
            item["profitPerHourDelta"] == 0
            or not item["isAvailable"]
            or item["price"] > sync_data["clickerUser"]["balanceCoins"]
        ):
            continue
        if item["id"] in myUpgradesList:
            other_list.append(
                {
                    "id": item["id"],
                    "name": item["name"],
                    "price": item["price"],
                    "section": item["section"],
                    "profitPerHourDelta": item["profitPerHourDelta"],
                    "efficiency": item["price"] / item["profitPerHourDelta"],
                }
            )

    return sorted(other_list, key=lambda x: x["efficiency"])


def new_tap():
    sync_data = sync()
    earnPerTap = sync_data["clickerUser"]["earnPerTap"]
    availableTaps = sync_data["clickerUser"]["availableTaps"]
    tapsRecoverPerSec = sync_data["clickerUser"]["tapsRecoverPerSec"]
    lastSyncUpdate = sync_data["clickerUser"]["lastSyncUpdate"]
    delay = 3

    _numberOfTaps = round(availableTaps / earnPerTap)
    spentTimeForTaps = _numberOfTaps * 0.05  # milliseconds
    totalWaitedTime = spentTimeForTaps + delay
    adding_taps = round(totalWaitedTime / 1000) * tapsRecoverPerSec

    _timestamp = int(time.time()) - totalWaitedTime
    _available = (availableTaps % earnPerTap) + adding_taps

    dt_server = _timestamp - lastSyncUpdate
    new_timestamp = _timestamp + dt_server

    try:
        res = requests.post(
            f"{base_url}/buy-upgrade",
            json={
                "count": _numberOfTaps,
                "availableTaps": _available,
                "timestamp": new_timestamp,
            },
            headers=post_headers,
        )
        string_data = res.content.decode("utf-8")
        return json.loads(string_data)
    except Exception as e:
        pass
        # print(e)


def execute_upgrades(upgrades_list):

    old_earnPassivePerHour = sync()["clickerUser"]["earnPassivePerHour"]

    if upgrades_list:
        for item in upgrades_list:
            try:
                res = requests.post(
                    f"{base_url}/buy-upgrade",
                    json={
                        "upgradeId": item["id"],
                        "timestamp": int(time.time() * 1000),
                    },
                    headers=post_headers,
                )
                string_data = res.content.decode("utf-8")
                data = json.loads(string_data)
                if data["clickerUser"]:
                    send(
                        f"{name}: {item['name']} was upgraded \n Your profit per our has increased from {old_earnPassivePerHour} to {old_earnPassivePerHour+item['profitPerHourDelta']} by {item['profitPerHourDelta']} for {item['price']}"
                    )
                    execute_upgrades(upgrades())
                    break
            except Exception as e:
                pass
                # print(e)
    else:
        send(f"{name}: No upgrades to execute")

    return True


def app_sync():
    current_time = datetime.now().time()
    start_time = dtime(15, 0)  # 3 PM
    end_time = dtime(18, 0)  # 6 PM

    if start_time <= current_time <= end_time:
        send("The current time is between 3 PM and 6 PM.")
    else:
        upgrades_all = upgrades()
        send(f"{name}: Query execution started")
        execute_upgrades(upgrades_all)


if __name__ == "__main__":

    print("Starting app_sync")

    app_sync()

    schedule.every(1).hour.do(app_sync)

    while True:
        schedule.run_pending()
        time.sleep(1)
