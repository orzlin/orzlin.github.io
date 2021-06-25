const app=new Vue(
    {
        el:'#app',
        data:{
            "one":[ {
                "name": "ins",
                "value": "https://www.instagram.com",
                "id": 0
            }],
            "two":[{
                "name": "twitter",
                "value": "https://twitter.com",
                "id": 0
            }],
            "three":[{
                "name": "Youtube",
                "value": "https://www.youtube.com",
                "id": 0
            }],
            "four":[{
                "name": "Bilibili",
                "value": "https://www.bilibili.com",
                "id": 0
            }],
            "five":[{
                "name": "微博",
                "value": "https://weibo.com",
                "id": 0
            }],
            "six":[{
                "name": "网易",
                "value": "https://www.163.com",
                "id": 0
            }],
            "seven":[{
                "name": "知乎",
                "value": "https://www.zhihu.com",
                "id": 0
            }],
            "eight":[{
                "name": "Github",
                "value": "https://www.github.com",
                "id": 0
            }]
        },
        created(){
            let list=[this.one,this.two,this.three,this.four,this.five,this.six,this.seven,this.eight];
            let count=1;
            for(i of list){
                for(n of i){
                    n.id=count;
                    count+=1;
                }
            }
            if(!localStorage.one){localStorage.setItem("one",JSON.stringify(this.one));}
            if(!localStorage.two){localStorage.setItem("two",JSON.stringify(this.two));}
            if(!localStorage.three){localStorage.setItem("three",JSON.stringify(this.three));}
            if(!localStorage.four){localStorage.setItem("four",JSON.stringify(this.four));}
            if(!localStorage.five){localStorage.setItem("five",JSON.stringify(this.five));}
            if(!localStorage.six){localStorage.setItem("six",JSON.stringify(this.six));}
            if(!localStorage.seven){localStorage.setItem("seven",JSON.stringify(this.seven));}
            if(!localStorage.eight){localStorage.setItem("eight",JSON.stringify(this.eight));}
            this.one=JSON.parse(localStorage.one);
            this.two=JSON.parse(localStorage.two);
            this.three=JSON.parse(localStorage.three);
            this.four=JSON.parse(localStorage.four);
            this.five=JSON.parse(localStorage.five);
            this.six=JSON.parse(localStorage.six);
            this.seven=JSON.parse(localStorage.seven);
            this.eight=JSON.parse(localStorage.eight);
        },
        updated(){
            let list=[this.one,this.two,this.three,this.four,this.five,this.six,this.seven,this.eight];
            let count=1;
            for(i of list){
                for(n of i){
                    n.id=count;
                    count+=1;
                }
            }

            localStorage.setItem("one",JSON.stringify(this.one));
            localStorage.setItem("two",JSON.stringify(this.two));
            localStorage.setItem("three",JSON.stringify(this.three));
            localStorage.setItem("four",JSON.stringify(this.four));
            localStorage.setItem("five",JSON.stringify(this.five));
            localStorage.setItem("six",JSON.stringify(this.six));
            localStorage.setItem("seven",JSON.stringify(this.seven));
            localStorage.setItem("eight",JSON.stringify(this.eight));

        }
    }

)