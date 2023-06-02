var topbarLogo={
  template:'#topbarLogo' ,
   data:function() {
     return{
    show: false
     };
  }
}//logo of topbar
var topbarSpace={
  template:'#topbarSpace',
  methods: {
    changeBlue: function () {
      return (this.statusBlue = !this.statusBlue);
    }},
  data:function(){
    return{
      statusBlue: false,
    };
  }
};//space of topbar
var topbarFunction={
  template:'#topbarFunction',
  methods:{
      doSomethingOnMouseMove: function(event){
      console.log('You have reached to the button');
      event.srcElement.style.backgroundColor = 'pink';
    },
    doSomethingOnMouseOutHome: function(event){
      
      console.log('You left the mouse now...');
      event.srcElement.style.backgroundColor = '#E1C5FF';
    },
    doSomethingOnMouseOutsearch: function(event){
      
      console.log('You left the mouse now...');
      event.srcElement.style.backgroundColor = '#DAB8FF';
    },
    doSomethingOnMouseOutLogin: function(event){
      
      console.log('You left the mouse now...');
      event.srcElement.style.backgroundColor = '#D1A7FF';
    },
    doSomethingOnMouseOutSignup: function(event){
      
      console.log('You left the mouse now...');
      event.srcElement.style.backgroundColor = '#CB9CFF';
    },
  }
};//left of topbar
var searchcomponent = {
  template:'#SearchComponent'
};
var recipesList = {
  template: '#recipesList',
data: function(){
     return {
    food:[
        {
      title:"Recipes",
      beef : "Beef",
      chicken: 'Chicken',
      soup: 'Soup',
      pizza:"pizza",
      sushi:"Shshi",
      food:"Food",
      info:"Prep : 15min | Cook : 20min"
        }]
      }},
  methods: {},
} //variable, component of recipes list
var tagList={
  template:'#tagList',
  data: function () {
    return {
      food: [
        {
          title: "Recipes",
          beef: "Beef",
          chicken: "Chicken",
          soup: "Soup",
          pizza: "pizza",
          sushi: "Shshi",
          food: "Food",
          info: "Prep : 15min | Cook : 20min"
        }
      ]
      
    };
  },
  methods: {
    doSomethingOnMouseOuttag: function (event) {
      console.log("You left the mouse now...");
      event.srcElement.style.backgroundColor = "#E9E9E9";
    },
    doSomethingOnMouseMovetag: function (event) {
      console.log("You have reached to the button");
      event.srcElement.style.backgroundColor = "#AAE1F9";
    }
  },
};
var searchPage = {
  template:'#searchPage',
  data: function () {
    return {
      food: [
        {
          title: "Recipes",
          beef: "Beef",
          chicken: "Chicken",
          soup: "Soup",
          pizza: "pizza",
          sushi: "Shshi",
          food: "Food",
          info: "Prep : 15min | Cook : 20min"
        }
      ],
      message: 'search recipe!'
    };
  }
};
var loginPage = {
  template:'#loginPage'
};
var signupPage={
  template:'#signup-page'
}
var recipeinfo={
  template:'#recipeinfo',  
  data:function(){
    return{
      i: 0,
      title:"Tomato rainbow pizza",
      description:"This simple rainbow pizza is a great addition to lunchboxes and dinner tables. Get the kids in the kitchen to help you make it, and you'll have a pizza full of veggies that they'll be excited to eat!",
      cookinfo:[{
        prep:"prep time",
        ptime:"30min",
        cook:"cook time",
        ctime:"15min",
        serving:"serving",
        hser:"6 serving"
      }],
      tag:[{
        tag:"tags",
        beef:"beef",
        pizza:"pizza",
        food:"food"
      }]
    };
  },
  methods: {
    increaseI: function () {
      this.i = this.i + 1;
    },
    evaluateI: function () {
      console.log("EvaluateI function called....");
      if (this.i <= 10) {
        return "like is less than or equal to 10";
      } else {
        return "like is greater than 10";
      }
    },
  },
  computed: {},
  watch: {
    i: function () {
      console.log("watch for i is active...");
      if (this.i >= 20) {
        var test3 = this;
        setTimeout(function () {
          test3.i = 0;
        }, 000);
      }
    }
  },  
}
var recipestep={
  template:'#recipestep',
  data: function(){ 
  return{
    
    toolList: [
      { id: 0, text: 'Large Heavy Pot With Lid' },
      { id: 1, text: 'Measuring Spoons' },
      { id: 2, text: 'Measuring Cups' }
    ],
    ingredientsList: [
      { id: 0, text: '4 x 40g wholegrain wraps' },
      { id: 1, text: '90g (1/3 cup) no-added-salt tomato paste' },
      { id: 2, text: '2 zucchini, thinly sliced' }
    ],
    stepList: [
      { id: 0,text1:'step 1', text2: 'In a small bowl, whisk the warm water , yeast and honey to blend. Set aside for 5 mins or until foamy. Stir in the oil .' },
      
      { id: 1,text1:'step 2', text2: 'In a food processor, blend the flour and salt . With the machine running, pour in the yeast mixture (dough will be wet). Transfer dough to a floured work surface and knead for 3 mins or until it becomes smooth and elastic. The dough will be very tacky but will release cleanly from your hands.' },
      
      { id: 2,text1:'step 3', text2: 'Form dough into two balls. Place on a floured baking tray and dust the tops with flour. Cover loosely with plastic wrap and set aside in a warm place for 45 mins or until doubled in size.' },
      
      { id: 3,text1:'step 4', text2: 'Meanwhile, position oven rack in bottom third of oven. Preheat oven to 250°C (230°C fan-forced). Line 2 large baking trays with baking paper.' }
    ]
  };}
}



const home = {
  template: "#home",
  components:{
    'search': searchcomponent,
    'recipeList':recipesList,
    'tagList': tagList
  }  
};

const search = {
  template: "#search",
  components:{
    'searchpage': searchPage
  }
};

const login = {
  template: "#login",
  components:{
    'loginpage': loginPage
  }
};

const signup = {
  template: "#signup",
  components:{
    'signuppage': signupPage
  }
};

Vue.component('tool-item', {
  props: ['tool'],
  template: '<p class="single-tool">{{ tool.text }}</p>'
})// tool

Vue.component('ing-item', {
  props: ['ingredients'],
  template: '<p class="single-ingredient">{{ ingredients.text }}</p>'
})// Ingredients

Vue.component('step-list', {
  props: ['step'],
  template: ' <div class="single-instruction"><header><p>{{step.text1}}</p><div></div></header><p>{{step.text2}}</p></div>'
})// step

const recipe = {
  template: "#recipe", 
  components:{
    'recipeinfo':recipeinfo,
    'recipestep':recipestep
  }
};

const routes = [
  { path: "", component: home },
  { path: "/1", component: search },
  { path: "/2", component: login },
  { path: "/3", component: signup },
  { path: "/4", component: recipe }
  
];

const router = new VueRouter({
  routes
});

new Vue({
  el: "#app",
  router,
  components:{
    'topbar-logo':topbarLogo,
    'topbar-space': topbarSpace,
    'topbar-function':topbarFunction
  },
  methods: {
    doSomethingOnMouseMove: function (event) {
      console.log("You have reached to the button");
      event.srcElement.style.backgroundColor = "pink";
    },
    doSomethingOnMouseOutHome: function (event) {
      console.log("You left the mouse now...");
      event.srcElement.style.backgroundColor = "#E1C5FF";
    },
    doSomethingOnMouseOutsearch: function (event) {
      console.log("You left the mouse now...");
      event.srcElement.style.backgroundColor = "#DAB8FF";
    },
    doSomethingOnMouseOutLogin: function (event) {
      console.log("You left the mouse now...");
      event.srcElement.style.backgroundColor = "#D1A7FF";
    },
    doSomethingOnMouseOutSignup: function (event) {
      console.log("You left the mouse now...");
      event.srcElement.style.backgroundColor = "#CB9CFF";
    }
  }
});
