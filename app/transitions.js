export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('story'),
    this.hasClass('fade-demo'),
  this.use('fade', {duration})
  );
};
