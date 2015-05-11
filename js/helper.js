var htmlskill='<div class="col-md-2 skill-name"><svg height="200" width="200"><circle cx="100" cy="100" r="80" stroke="white" stroke-width="3" fill="#C3834D" /></svg></div>';
var skills = ['C','C++','HTML5','CSS3','Javascript','jQuery','AngularJs','node.js','Python','Java','Swift','Ruby'];
for(skill in skills){
	$('.skill').append(htmlskill);
}