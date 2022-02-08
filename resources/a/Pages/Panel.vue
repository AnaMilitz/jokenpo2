<template>
  <main>
    <section class="section-courses">
      <h1>Em andamento</h1>
      <div class="courses-slider">
        <div class="course-box" v-for="course in courses" v-bind:key="course.id">
          <div class="course-box-head">
            <img v-bind:src="course.img_path" :alt="course.id" style="width:215px;">
          </div>
          <div class="course-box-body">
            <h2> {{course.name}} </h2>
            <div class="course-box-tags">
              <span v-for="tag in course.tags" v-bind:key="tag"> {{tag}} </span>
            </div>
            <div class="course-box-progresion-bar">
              <div class="course-box-progresion-bar-fill" :style="{width: (course.progression * progression_max ) + 'px'}"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  props: {
    title: String
  },
  setup(props) {
    console.log(props.title);
  },
  data(){
    return {
      progression_max: 210,
      tags: ["Aprendizado", "Vrau", "Nelson", "Emagrecimento", "Claudio", "TAG0121"],
      courses: [],
    }
  },
  mounted(){
    for(let i = 0; i < 10; i++){
      var tags = this.tags.slice(0, this.tags.length);
      var course = {
        id: i,
        name: "Curso de Tinder",
        img_path: "../../img/courses/test.jpg",
        tags: [],
        progression: Math.random(),
      }
      var m =  Math.round(Math.random() * 6 + 1);
      for(let j = 0; j < m; j++){
        var x = Math.round(Math.random() * tags.length);
        course.tags.push(tags[x]);
        tags.splice(x, 1);
      }
      this.courses.push(course);
    }
  }
}
</script>

<style>
h1{
  font-size: 16pt;
}
.section-courses{
  width: 80%;
  padding: 10px;
  margin: 20px 0px;
}
.courses-slider{
  height: 320px;
  width: 100%;
  display: flex;
  align-content: center;
  flex-wrap: nowrap;
  overflow-x: auto;
}
.course-box{
  background: #FFFFFF;
  border: 1px rgba(205, 205, 205, 0.7) solid;
  border-radius: 25px;
  height: 270px;
  width: 225px;
  margin-left: 20px;
  padding: 5px;
  box-sizing: content-box;
}
.course-box-head{
  height: 135px;
  width: 215px;
  border-radius: 25px 25px 0px 0px;
  overflow: hidden;
}
.course-box-body{
  height: 135px;
  width: 215px;
  display: flex;
  align-content: center;
  justify-content: space-evenly;
  flex-flow: column;
}
.course-box-tags{
  height: 80px;
  width: 215px;
  overflow: hidden;
}
.course-box-tags > span{
  padding: 0px 5px;
  border-radius: 15px;
  background: #48f9ff83;
  box-sizing: content-box;
}
.course-box-progresion-bar{
  width: 210px;
  height: 10px;
  border: 0.5px black solid;
  border-radius: 20px;
  overflow: hidden;
  box-sizing: content-box;
}
.course-box-progresion-bar-fill{
  height: 10px;
  background-color: var(--second-color);
}
</style>