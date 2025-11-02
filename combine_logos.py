#!/usr/bin/env python3
from PIL import Image

# Load the logos
altareq = Image.open('/Users/michartmann/Documents/GitHub/docs/logo/al tareq logo.png')
adcb_light = Image.open('/Users/michartmann/Documents/GitHub/docs/logo/adcb-light.png')
adcb_dark = Image.open('/Users/michartmann/Documents/GitHub/docs/logo/adcb-dark.png')

# Calculate target height (use the smaller logo's height as reference)
target_height = 100  # Standard header logo height
spacing = 30  # Space between logos

# Resize Al Tareq logo
altareq_aspect = altareq.width / altareq.height
altareq_new_width = int(target_height * altareq_aspect)
altareq_resized = altareq.resize((altareq_new_width, target_height), Image.Resampling.LANCZOS)

# Resize ADCB light logo
adcb_light_aspect = adcb_light.width / adcb_light.height
adcb_light_new_width = int(target_height * adcb_light_aspect)
adcb_light_resized = adcb_light.resize((adcb_light_new_width, target_height), Image.Resampling.LANCZOS)

# Resize ADCB dark logo
adcb_dark_aspect = adcb_dark.width / adcb_dark.height
adcb_dark_new_width = int(target_height * adcb_dark_aspect)
adcb_dark_resized = adcb_dark.resize((adcb_dark_new_width, target_height), Image.Resampling.LANCZOS)

# Create combined light mode logo
combined_width_light = altareq_new_width + spacing + adcb_light_new_width
combined_light = Image.new('RGBA', (combined_width_light, target_height), (255, 255, 255, 0))
combined_light.paste(altareq_resized, (0, 0), altareq_resized if altareq_resized.mode == 'RGBA' else None)
combined_light.paste(adcb_light_resized, (altareq_new_width + spacing, 0), adcb_light_resized if adcb_light_resized.mode == 'RGBA' else None)
combined_light.save('/Users/michartmann/Documents/GitHub/docs/logo/combined-light.png')

# Create combined dark mode logo
combined_width_dark = altareq_new_width + spacing + adcb_dark_new_width
combined_dark = Image.new('RGBA', (combined_width_dark, target_height), (0, 0, 0, 0))
combined_dark.paste(altareq_resized, (0, 0), altareq_resized if altareq_resized.mode == 'RGBA' else None)
combined_dark.paste(adcb_dark_resized, (altareq_new_width + spacing, 0), adcb_dark_resized if adcb_dark_resized.mode == 'RGBA' else None)
combined_dark.save('/Users/michartmann/Documents/GitHub/docs/logo/combined-dark.png')

print("Combined logos created successfully!")
print(f"Light mode: {combined_width_light}x{target_height}px")
print(f"Dark mode: {combined_width_dark}x{target_height}px")
