from telethon.sync import TelegramClient
from telethon.tl.types import InputPeerEmpty

# Go to https://my.telegram.org/apps, sign in, go to API development tools, create an app, copy and paste below:
api_id = 18134942
api_hash = 'cf3ab227b9d30444210c829ccce2d968'
phone = '+84964560997'
client = TelegramClient(phone, api_id, api_hash)

client.connect()
if not client.is_user_authorized():
    client.send_code_request(phone)
    client.sign_in(phone, input('Enter the code: ')) # Enter the login code sent to your telegram 
