import json

# ✅ Step 1: Add your new scraped image URLs here
new_image_urls = [
  "https://pictures.kartmax.in/live/sites/9s145MyZrWdIAwpU0JYS/theme/whatsapp-a2b53150-1451-4482-ac81-2e54abe2e45c.jpg",
  "https://flagicons.lipis.dev/flags/4x3/gb.svg",
  "https://pictures.kartmax.in/live/original/0x0/sites/9s145MyZrWdIAwpU0JYS/theme/shield-check-outline-7c4b122e-ddd8-40da-bdf0-febf6c4b728d.svg",
  "https://pictures.kartmax.in/live/original/0x0/sites/9s145MyZrWdIAwpU0JYS/theme/VS_corner2-062a561f-3a88-4a5d-8b06-89e790a0544a.jpg",
  "https://pictures.kartmax.in/live/sites/9s145MyZrWdIAwpU0JYS/tmp/category/image-13951278-c0f8-4a00-9669-b6b901d109f7.jpg",
  "https://pictures.kartmax.in/live/original/0x0/sites/9s145MyZrWdIAwpU0JYS/theme/box-outline-c5199a6a-91dd-4e4c-92ce-61f87582d649.svg",
  "https://pictures.kartmax.in/live/original/0x0/sites/9s145MyZrWdIAwpU0JYS/theme/footer_paymnt-0e622a5b-7ff2-4e47-92a0-acf15a7a5b74.jpg",
  "https://pictures.kartmax.in/live/cover/495x660/sites/9s145MyZrWdIAwpU0JYS/product-images/pretty_teal_blue_lahenga_choli_in_georgette_1728785192as3063722_1.jpg",
  "https://pictures.kartmax.in/live/cover/495x660/sites/9s145MyZrWdIAwpU0JYS/product-images/mint_green_silk_wedding_wear_lehenga_choli_1755065861as3373601.jpg",
  "https://flagicons.lipis.dev/flags/4x3/nz.svg",
  "https://pictures.kartmax.in/live/cover/238x321/placeholders/placeholder.png",
  "https://pictures.kartmax.in/live/cover/495x660/sites/9s145MyZrWdIAwpU0JYS/product-images/beige_elegant_silk_wedding_wear_lehenga_choli_for_women_1754993203as3171746_1.jpg",   
  "https://pictures.kartmax.in/live/cover/495x660/sites/9s145MyZrWdIAwpU0JYS/product-images/light_blue_silk_wedding_wear_lehenga_choli_1750919328pushp.jpg",
  "https://pictures.kartmax.in/live/cover/495x660/sites/9s145MyZrWdIAwpU0JYS/product-images/dark_beige_silk_wedding_wear_lehenga_choli_1754999831as3373587_1.jpg",
  "https://pictures.kartmax.in/live/cover/495x660/sites/9s145MyZrWdIAwpU0JYS/product-images/pastel_grey_silk_lehenga_choli_with_dupatta_1750916222pahsmina.jpg",
  "https://pictures.kartmax.in/live/cover/495x660/sites/9s145MyZrWdIAwpU0JYS/product-images/dark_grey_organza_lehenga_choli_with_attetched_dupatta_1755064852as3373593.jpg",      
  "https://flagicons.lipis.dev/flags/4x3/in.svg",
  "https://pictures.kartmax.in/live/original/0x0/sites/9s145MyZrWdIAwpU0JYS/theme/svgexport-3-1-2-b207e430-768d-4224-9e83-0df9a0766fb2.svg",
  "https://docket.kartmax.in/sites/9s145MyZrWdIAwpU0JYS/tmp/theme/g3_logo_trim-0a3585d7-4664-460a-9c49-e9d7b37e2b95.jpg",
  "https://pictures.kartmax.in/live/cover/495x660/sites/9s145MyZrWdIAwpU0JYS/product-images/black_net_party_wear_lehenga_choli_with_dupatta_1755075016as3369046.jpg",
  "https://pictures.kartmax.in/live/sites/9s145MyZrWdIAwpU0JYS/tmp/category/image-5b3b25c3-76ee-4fac-afd4-3d6020e6c5bf.jpg",
  "https://pictures.kartmax.in/live/cover/495x660/sites/9s145MyZrWdIAwpU0JYS/product-images/purple_organza_shrug_lehenga_choli_with_resham_work_1753768931as3342465_1.jpg",       
  "https://pictures.kartmax.in/live/cover/495x660/sites/9s145MyZrWdIAwpU0JYS/product-images/rama_blue_silk_wedding_wear_lehenga_choli_1750916637pakhi.jpg",
  "https://pictures.kartmax.in/live/original/0x0/sites/9s145MyZrWdIAwpU0JYS/theme/ff-insta-2cdbd243-e6db-40ed-b9d3-cccd0d3a2bd0.jpg",
  "https://pictures.kartmax.in/live/original/0x0/sites/9s145MyZrWdIAwpU0JYS/theme/magic-stick-linear-bdb5a10e-a51d-47ff-8b66-6dece23c1e6c.svg",
  "https://pictures.kartmax.in/live/cover/495x660/sites/9s145MyZrWdIAwpU0JYS/product-images/pink_georgette_ruffle_dupatta_lehenga_choli_1755000065as3373596_2.jpg",
  "https://flagicons.lipis.dev/flags/4x3/us.svg",
  "https://pictures.kartmax.in/live/cover/495x660/sites/9s145MyZrWdIAwpU0JYS/product-images/unique_pista_green_silk_lehenga_choli_17375209257104_1.jpg",
  "https://pictures.kartmax.in/live/original/0x0/sites/9s145MyZrWdIAwpU0JYS/theme/ff-pin-b030b2b6-8b6e-4013-976f-7bbf98fa78d4.jpg",
  "https://pictures.kartmax.in/live/original/0x0/sites/9s145MyZrWdIAwpU0JYS/theme/Common-D-831283ed-fb77-4110-986d-a3fe1441c382.jpg",
  "https://pictures.kartmax.in/live/original/0x0/sites/9s145MyZrWdIAwpU0JYS/theme/search-interface-symbol-c483e894-c6e6-4e07-9653-f494fab79417.jpg",
  "https://pictures.kartmax.in/live/original/0x0/sites/9s145MyZrWdIAwpU0JYS/theme/ff-fb-c3404805-09be-46af-b2fc-96020abb2021.jpg",
  "https://pictures.kartmax.in/live/original/0x0/sites/9s145MyZrWdIAwpU0JYS/theme/ff-youtube-20bc9a4e-8b31-42d0-90e3-ef0d775b7998.jpg",
  "https://pictures.kartmax.in/live/sites/9s145MyZrWdIAwpU0JYS/tmp/category/image-13cc9650-549b-468a-afa8-c7d4ea7bf04f.jpg",
  "https://pictures.kartmax.in/live/original/0x0/sites/9s145MyZrWdIAwpU0JYS/theme/videocamera-record-linear-37cde735-2f0b-4de6-8e69-b2a97ff22989.svg",
  "https://pictures.kartmax.in/live/original/0x0/sites/9s145MyZrWdIAwpU0JYS/theme/ff-whatsapp-aa5fbd8b-f7ed-4150-824d-3a64b541f7da.jpg",
  "https://pictures.kartmax.in/live/outside/80x80/services/login-mobile-icon.png",       
  "https://pictures.kartmax.in/live/cover/495x660/sites/9s145MyZrWdIAwpU0JYS/product-images/letest_light_green_lehenga_choli_for_wedding_17375222197111.jpg",
  "https://pictures.kartmax.in/live/cover/495x660/sites/9s145MyZrWdIAwpU0JYS/product-images/mehendi_green_silk_wedding_style_lehenga_choli_17375211467105.jpg",
  "https://pictures.kartmax.in/live/original/0x0/sites/9s145MyZrWdIAwpU0JYS/theme/3332x-04773733-b48d-4583-a7cb-2cb8ff8a12db-3de19546-df86-4096-8836-6756fb9b6ada.jpg",
  "https://pictures.kartmax.in/live/cover/495x660/sites/9s145MyZrWdIAwpU0JYS/product-images/mehendi_olive_silk_designer_lehenga_choli_1755001147as3378931.jpg",
  "https://pictures.kartmax.in/live/original/0x0/sites/9s145MyZrWdIAwpU0JYS/theme/vS-corner-82b4b459-9daf-4f35-ac9f-13353c25d840.jpg",
  "https://pictures.kartmax.in/live/cover/495x660/sites/9s145MyZrWdIAwpU0JYS/product-images/light_maroon_silk_lehenga_choli_with_dupatta_1750918452prakruti.jpg",
  "https://pictures.kartmax.in/live/cover/495x660/sites/9s145MyZrWdIAwpU0JYS/product-images/light_purple_soft_net_lehenga_choli_for_party_wear_1754475792as3378928_2.jpg",        
  "https://pictures.kartmax.in/live/cover/495x660/sites/9s145MyZrWdIAwpU0JYS/product-images/yellow_silk_wedding_lehenga_choli_with_dupatta_1750917432panchi_1.jpg",
  "https://pictures.kartmax.in/live/original/0x0/sites/9s145MyZrWdIAwpU0JYS/theme/Common-M-36eb24c6-663f-4335-99f1-26ff384e0c44.jpg",
  "https://flagicons.lipis.dev/flags/4x3/sg.svg",
  "https://flagicons.lipis.dev/flags/4x3/au.svg",
  "https://pictures.kartmax.in/live/cover/495x660/sites/9s145MyZrWdIAwpU0JYS/product-images/attractive_peach_silk_wedding_lehenga_choli_1750918034paulomi.jpg",
  "https://flagicons.lipis.dev/flags/4x3/ca.svg",
  "https://pictures.kartmax.in/live/cover/495x660/sites/9s145MyZrWdIAwpU0JYS/product-images/classy_mustard_yellow_lehenga_choli_for_wedding_1728786575as3088290.jpg",
  "https://pictures.kartmax.in/live/cover/495x660/sites/9s145MyZrWdIAwpU0JYS/product-images/latest_mehendi_green_silk_wedding_style_lehenga_choli_17375217157108.jpg",
  "https://pictures.kartmax.in/live/cover/495x660/sites/9s145MyZrWdIAwpU0JYS/product-images/awesome_light_green_lehenga_choli__1728788249as3094268_1.jpg",
  "https://pictures.kartmax.in/live/themes/category_placeholder.jpg",
  "https://pictures.kartmax.in/live/cover/495x660/sites/9s145MyZrWdIAwpU0JYS/product-images/stunning_purple_lehenga_choli_in_georgette_1732251837as3042600.jpg",
  "https://pictures.kartmax.in/live/cover/495x660/sites/9s145MyZrWdIAwpU0JYS/product-images/pink_elegant_silk_wedding_wear_lehenga_choli_with_dupatta_1754999742as3373585.jpg",   
  "https://pictures.kartmax.in/live/sites/9s145MyZrWdIAwpU0JYS/tmp/category/image-476e337a-ab66-46ab-b7ad-c5e585f6ceac.jpg"
]

# ✅ Step 2: Path to lehnga.json file
file_path = "C:/Users/HP/Desktop/e-commerce/src/customer/Data/LehngaCholi.json"

# ✅ Step 3: Load existing JSON data
with open(file_path, "r", encoding="utf-8") as f:
    data = json.load(f)

# ✅ Step 4: Replace only imageUrl values
for i, item in enumerate(data):
    if i < len(new_image_urls):
        item["imageUrl"] = new_image_urls[i]

# ✅ Step 5: Save updated JSON
with open(file_path, "w", encoding="utf-8") as f:
    json.dump(data, f, indent=4, ensure_ascii=False)

print("✅ Updated lehnga.json with new image URLs")
