const section = document.getElementsByClassName('dropdown-content');
const resume  = document.getElementById('resume');
const skills = document.getElementById('container');
const project = document.getElementById('project1');
const contacts = document.getElementById('contact');

function moveUp(e){
    if(e.target === 'About Me'){
        console.log(e.target);
    }
    else if(e.target === 'Skills'){
        console.log(e.target);
    }
    else if(e.target === 'Projects'){
        console.log(e.target);
    }
    else if(e.target === 'Contacts'){
        console.log(e.target);
    }
}

document.addEventListener('click', moveUp);