document.addEventListener("DOMContentLoaded",()=>{
  const menu=document.querySelector(".menu-btn");
  const links=document.querySelector(".navlinks");
  if(menu&&links) menu.addEventListener("click",()=>{links.classList.toggle("open");menu.setAttribute("aria-expanded",links.classList.contains("open")?"true":"false")});
  const current=location.pathname.split("/").pop()||"index.html";
  document.querySelectorAll(".navlinks a").forEach(a=>{if(a.getAttribute("href")===current)a.classList.add("active")});
  const picker=document.getElementById("retinaFile");
  const preview=document.getElementById("imagePreview");
  const status=document.getElementById("demoStatus");
  if(picker&&preview){
    picker.addEventListener("change",()=>{
      const file=picker.files&&picker.files[0];
      if(!file){preview.style.display="none";return}
      if(!file.type.startsWith("image/")){status.textContent="Please choose an image file.";picker.value="";return}
      const reader=new FileReader();
      reader.onload=()=>{preview.src=reader.result;preview.style.display="block";status.textContent="Image loaded for visual demonstration. No medical analysis has been performed."};
      reader.readAsDataURL(file);
    });
  }
  const analyze=document.getElementById("demoAnalyze");
  if(analyze) analyze.addEventListener("click",()=>{
    if(!picker||!picker.files||!picker.files.length){status.textContent="Upload an image first. This prototype does not calculate a diagnosis or risk score.";return}
    status.textContent="Prototype only: the image preview works, but no trained and clinically validated AI model is connected. No ASD risk score is generated.";
  });
});
