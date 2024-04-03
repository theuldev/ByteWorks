import os
import random
import urllib.parse
from time import sleep
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from flask import Flask, jsonify, request, make_response
from selenium.webdriver.chrome.service import Service as ChromeService

# Obtenha o diretório do perfil
dir_path = os.getcwd()
profile = os.path.join(dir_path, "profile", "wpp")

# Configure as opções do Chrome com o diretório do perfil
chrome_options = Options()
arguments = ['--lang=pt-BR', '--disable-notifications']
for argument in arguments:
    chrome_options.add_argument(argument)
chrome_options.add_argument(r"user-data-dir={}".format(profile))


chrome = webdriver.Chrome(options=chrome_options)

chrome.get("https://web.whatsapp.com")

# Enviar mensagem agendada, necessário passar numero: "+557184219030"
def send_scheduled_message(numero, mensagem, horario):
    mensagem_url = urllib.parse.quote(mensagem)

    chrome.get(
        f"https://web.whatsapp.com/send?phone={numero}&text={mensagem_url}")
    while len(chrome.find_elements(By.XPATH, "//button[@aria-label='Send']")) < 1:
        sleep(1)
    # Ou vai estar com o nome "Enviar"
    chrome.find_element(By.XPATH, "//button[@aria-label='Send']").click()

# Enviar mensagem usando o número e a mensagem
def send_message_number(numero, mensagem):
    # Codificar a mensagem para que ela possa ser passada na URL do usuário
    mensagem_url = urllib.parse.quote(mensagem)

    # Navegar até a aba do número pra enviar a mensagem pro cliente
    chrome.get(f"https://web.whatsapp.com/send?phone={numero}&text={mensagem_url}")

    # Aguardar a tela carregar para enviar mensagem
    while len(chrome.find_elements(By.XPATH, "//button[@aria-label='Send']")) < 1:
        sleep(1)
    # Clicar no botão de enviar
    chrome.find_element(By.XPATH, "//button[@aria-label='Send']").click()

# Enviar imagem ou video com ou sem mensagens
## Enviar imagem pra algum contato one_view precisa ser True ou False
def send_message_img_vid(numero, nome_arquivo, mensagem, one_view):

    # Verificar se o cliente escolheu envio unico ou não
    visu_unica = one_view

    # Extrair o caminho completo do arquivo a partir do nome, deve ser passado "foto_minha.jpeg"
    arquivo = os.path.abspath(nome_arquivo)

    # Verificar se será enviado apenas a imagem ou terá uma imagem em conjunto
    if mensagem:
        mensagem_url = urllib.parse.quote(mensagem)

        chrome.get(
            f"https://web.whatsapp.com/send?phone={numero}&text={mensagem_url}")
        while len(chrome.find_elements(By.XPATH, "//button[@aria-label='Send']")) < 1:
            sleep(1)
    else:
        chrome.get(f"https://web.whatsapp.com/send?phone={numero}")
        while len(chrome.find_elements(By.XPATH, "//button[@aria-label='Voice message']")) < 1:
            sleep(1)

    chrome.find_element(By.XPATH, "//div[@title='Attach']").click()
    sleep(1)

    enviar_mp4_e_img = chrome.find_element(
        By.XPATH, "//input[@accept='image/*,video/mp4,video/3gpp,video/quicktime' and @type='file']")

    enviar_mp4_e_img.send_keys(arquivo)

    sleep(1)

    # Verificar se é pra ser enviado a mensagem por visualização única ou não
    if visu_unica is True:
        chrome.find_element(By.XPATH, "//button[@type='button' and @aria-pressed='false']").click()

    # Clicar no botão de enviar
    chrome.find_element(By.XPATH, "//div[@role='button' and @aria-label='Send']").click()

# Enviar arquivos com ou sem mensagens
def send_message_file(numero, caminho_file, mensagem):
    # O arquivo 
    arquivo = os.path.abspath(caminho_file)

    # Verificar se será enviado apenas a imagem ou terá uma imagem em conjunto
    if mensagem:
        mensagem_url = urllib.parse.quote(mensagem)

        chrome.get(
            f"https://web.whatsapp.com/send?phone={numero}&text={mensagem_url}")
        while len(chrome.find_elements(By.XPATH, "//button[@aria-label='Send']")) < 1:
            sleep(1)
    else:
        chrome.get(f"https://web.whatsapp.com/send?phone={numero}")
        while len(chrome.find_elements(By.XPATH, "//button[@aria-label='Voice message']")) < 1:
            sleep(1)

    chrome.find_element(By.XPATH, "//div[@title='Attach']").click()
    sleep(1)

    send_file = chrome.find_element(
        By.XPATH, "//input[@accept='*' and @type='file']")
    send_file.send_keys(arquivo)

    sleep(1)

    # Enviar mensagem com imagem
    chrome.find_element(
        By.XPATH, "//div[@role='button' and @aria-label='Send']").click()

def qrcode_extract():

    elemento_qrcode = chrome.find_element(
        By.XPATH, "//canvas[@aria-label='Scan me!']")

    # Obtenha a localização e as dimensões do elemento do QR code
    location = elemento_qrcode.location
    size = elemento_qrcode.size

    # Tire uma captura de tela da área do QR code
    chrome.save_screenshot("screenshot.png")

    # Use o Pillow para recortar a imagem do QR code
    from PIL import Image

    screenshot = Image.open("screenshot.png")
    left = location['x']
    top = location['y']
    right = location['x'] + size['width']
    bottom = location['y'] + size['height']

    qr_code_image = screenshot.crop((left, top, right, bottom))

    # Salve a imagem do QR code
    qr_code_image.save("qr_code.png")

def search_contact(nome):
    texto_pesquisa = chrome.find_element(By.XPATH, "//div[@role='textbox' and @title='Search input textbox']")
    texto_pesquisa.send_keys(nome)
    grupo_encontrado = chrome.find_element(By.XPATH, f"//span[@title='{nome}']")

    while len(grupo_encontrado) < 1:
        sleep(1)

    chrome.find_elements(By.XPATH, "//div[@tabindex='-1' and @role='row']").click()

def recolher_grupo(nome_grupo):
    texto_pesquisa = chrome.find_element(By.XPATH, "//div[@role='textbox' and @title='Search input textbox']")
    texto_pesquisa.send_keys(nome_grupo)
    grupo_encontrado = chrome.find_element(By.XPATH, f"//span[@title='{nome_grupo}']")

    while len(grupo_encontrado) < 1:
        sleep(1)

    chrome.find_elements(By.XPATH, "//div[@tabindex='-1' and @role='row']").click()

    chrome.find_elements(By.XPATH, "//div[@title='Profile Details' and @role='button']").click()

def recolher_grupo_1a1():
    elemento_usuarios = chrome.find_elements(
        By.XPATH, "//div[@class='g0rxnol2 g0rxnol2 thghmljt p357zi0d rjo8vgbg ggj6brxn f8m0rgwh gfz4du6o ag5g9lrv bs7a17vp ov67bkzj']")

    for usuario in elemento_usuarios:
        elemento_nome_usuario = usuario.find_element(
            By.XPATH, "//div[@class='ggj6brxn gfz4du6o r7fjleex g0rxnol2 lhj4utae le5p0ye3 l7jjieqr _11JPr']").text
        print(elemento_nome_usuario)

        # Role a página para baixo usando JavaScript
        chrome.execute_script("window.scrollTo(0, -400);")

# Aguardar carregar a tela
while len(chrome.find_elements(By.ID, "side")) < 1:
    sleep(1)
