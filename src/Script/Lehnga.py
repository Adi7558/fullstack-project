import requests
from bs4 import BeautifulSoup
import json

# Replace this with your lehenga website URL
url = "https://g3fashion.com/en-in/women/lehenga-choli/occasion-reception?srsltid=AfmBOoo1j2MXa-V46nqN-19NGipzt4XmSv8bSCCtBLVCcgIvGIErYM43"

response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

image_urls = []

for img in soup.find_all("img"):
    src = img.get("src")
    if src and src.startswith("http"):  # only take full image links
        image_urls.append(src)

# Remove duplicates
image_urls = list(set(image_urls))

# ✅ Output as JSON array of strings
json_output = json.dumps(image_urls, indent=2)
print(json_output)
