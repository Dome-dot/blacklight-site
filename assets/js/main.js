// Mobile nav + copy link
const toggleBtn = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if (toggleBtn){
  toggleBtn.addEventListener('click', () => {
    const open = menu.style.display === 'flex';
    menu.style.display = open ? 'none' : 'flex';
    toggleBtn.setAttribute('aria-expanded', String(!open));
  });
}
const copyBtn = document.getElementById('copyLink');
if (copyBtn){
  copyBtn.addEventListener('click', async () => {
    const link = copyBtn.dataset.link;
    try{
      await navigator.clipboard.writeText(link);
      copyBtn.textContent = 'Copied!';
      setTimeout(()=>copyBtn.textContent='Copy invite',1200);
    }catch(e){
      window.prompt('Copy this link:', link);
    }
  });
}
