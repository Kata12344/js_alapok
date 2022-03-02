//Tömbök (lista)

var tomb =[];
var tomb2 =[2,3,4,5,6];
var tomb3=[4];

console.log(tomb.length);
console.log(tomb2.length);
console.log(tomb3.length);

tomb2[0]=12;


var txt="";
for (let index = 0; index < tomb2.length; index++) {
    txt += tomb2[index] + ", ";
}
console.log(txt);

var gyumolcs=["alma","málna","barack","ribizli","paradicsom"];
var gyumolcsSzin=["piros","piros","sárga","piros","piros"];
var gyumolcsAr= [240,500,300,250,500];

//van e sárga színű gyümölcs
var i=0;
while(i<gyumolcsSzin.length && !(gyumolcsSzin[i] === "sárga")){
    i++;
}

var vane=i<gyumolcsSzin.length;
console.log("Van sárga szín gyümölcs: " + vane)

//Mennyi a piros színű gyümölöcsök összértéke?
var pirosertek = 0;
for (let index = 0; index < gyumolcsSzin.length; index++) {
    if (gyumolcsSzin[i] === "piros")
        pirosertek = gyumolcsSzin[i].gyumolcsAr;
    
}


//Hány 300Ft alatti termék van
var db =0;
for (let index = 0; index < gyumolcsAr.length; index++) {
   if (gyumolcsAr[i] < 300)
        db++;
}
console.log(db + "db 300 alatti termék van")


//Van-e 1000Ft feletti termék
while(i<gyumolcsAr.length && !(gyumolcsAr[i] > 1000)){
    i++;
}
var van1000felett=i<gyumolcsAr.length;
console.log("Van-e 1000Ft feletti termék: " + van1000felett)