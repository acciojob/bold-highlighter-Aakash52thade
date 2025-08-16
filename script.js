
function highlight(){
  
  const StrongTags = document.querySelectorAll('strong');
  
  StrongTags.forEach((StrongTag) => {
    StrongTag.style.color = 'rgb(0, 128, 0)';
  })
}

function return_normal(){
  const StrongTags = document.querySelectorAll('strong');
  
  StrongTags.forEach(StrongTag => {
    StrongTag.style.color = 'rgb(0,0,0)';
  })
}
