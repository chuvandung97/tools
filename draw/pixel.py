# from time import sleep
# from colorama import Fore, Back, Style

# for i in range(0,50):
#   print(Back.WHITE + '  ', end='')
#   sleep(0.1)


#print(Style.RESET_ALL)

from PIL import Image
def rgb_of_pixel(img_path, x, y):
    im = Image.open(img_path).convert('RGB')
    r, g, b = im.getpixel((x, y))
    a = (r, g, b)
    print(a)
    return a

rgb_of_pixel(r"C:\\Users\\dungc\\Downloads\\i01_spord.png",300,300)