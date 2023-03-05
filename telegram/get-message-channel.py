from main import client
from telethon.tl.functions.messages import GetDialogsRequest
from telethon.tl.types import InputPeerEmpty
from tqdm import tqdm

chats = []
last_date = None
chunk_size = 200
groups=[]

result = client(GetDialogsRequest(
    offset_date=last_date,
    offset_id=0,
    offset_peer=InputPeerEmpty(),
    limit=chunk_size,
    hash = 0
))
chats.extend(result.chats)
for chat in chats:
    if chat.id == 1415628871:
        msgs = client.get_messages(chat, limit=2)
        for msg in tqdm(msgs):
            print(msg)
           #client.download_media(message=msg, file='./media/')