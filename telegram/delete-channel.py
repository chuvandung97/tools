from telethon.tl.functions.messages import GetDialogsRequest, GetAllChatsRequest, GetDialogUnreadMarksRequest
from main import client
"""
Megagroups are groups of more than 200 people, if you want to leave 
smaller groups as well delete this part. If you want to stay in a few 
specific groups, add their titles to the groups_to_exclude list.
"""
groups_to_exclude = [
    1226433842, 
    1369338381, 
    1415628871, 
    1485412771, 
    1427362313,
    1204185341,
    1354770987,
    1525326550,
    1462424873,
    1702644529,
    1268401220,
    1686055655,
    1765770482,
    1794177034,
    746026323,
    1167254840,
    1207781046,
    1276892613,
    1277053009,
    1304193586,
    1313360069,
    1325133182,
    1327014042,
    1472783146,
    1565097666,
    1573938108,
    1609325120
]

chats = []
last_date = None
chunk_size = 200
groups=[]

result = client(GetAllChatsRequest(except_ids=groups_to_exclude))
chats.extend(result.chats)


for chat in chats:
    print(chat.id, chat.title)
    try:
        if chat.id not in groups_to_exclude:
            print(chat.id, chat.title)
            #client.delete_dialog(chat)
    except:
        continue