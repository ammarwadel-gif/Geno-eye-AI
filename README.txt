GENO-EYE MULTI-PAGE WEBSITE
===========================

OPEN IN VS CODE
1. Extract the ZIP file.
2. Open the extracted "geno-eye-multipage" folder in VS Code.
3. Open index.html in a browser. No build command or package installation is required.

PAGES
- index.html       Home
- science.html     Scientific background
- technology.html  Proposed AI / computational workflow
- demo.html        Local image preview prototype
- research.html   Research plan, limitations, references
- team.html        Research team profiles

ADD YOUR REAL TEAM PHOTOS
1. Put Ammar's approved photo in assets/ and name it ammar.jpg.
2. Put Zezi's approved photo in assets/ and name it zezi.jpg.
3. In team.html, replace each placeholder <div class="person-photo">...</div> with:
   <div class="person-photo"><img src="assets/ammar.jpg" alt="Ammar Ahmed Adel"
   style="width:100%;height:100%;object-fit:cover"></div>
   Use assets/zezi.jpg and the correct alt text for the second person.
4. Use photos you both agree to publish. You can change the displayed names and biographies directly in team.html.

IMPORTANT SCIENTIFIC NOTES
- The demo only previews an image locally; it does not run AI or output a diagnosis/risk score.
- Do not claim model accuracy, sensitivity, prevalence or clinical performance unless supported by verified sources and your own completed analysis.
- Separate retinal images and gene lists cannot be treated as paired genotype-phenotype data unless they are linked appropriately.
- A fundus photo does not directly measure RNFL thickness; OCT is typically used for that measurement.
- Obtain required approvals before any research involving human participants or identifiable health data.

The website uses plain HTML, CSS and JavaScript. The Google Fonts import is optional; local system fonts are used if the network is unavailable.

TEAM PHOTOS
The current team page includes the supplied photos:
- assets/ammar.jpg — Ammar Ahmed Adel
- assets/zezi.jpg — Zezi Hany
Both images are local project assets; no external image host is required.
