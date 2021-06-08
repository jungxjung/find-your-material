
   // object for the selections
   const choiceData = selections.choices;
   const dataLength = Object.keys(choiceData).length;

   //object for the results
   const resultData = resultt.results;
   const resultDataLength = Object.keys(resultData).length;

    // create a div for left column
    const leftDiv = document.createElement("div");
    leftDiv.id = "leftDiv";
    

   // create a div for right column
   const rightDiv = document.createElement("div");
   rightDiv.id = "rightDiv";
   const rightDivTitle = document.createElement("h3");
   rightDivTitle.className = "rightDivTitle";
   

   // create a div for greeting message
   const greetDiv = document.createElement("div");
   greetDiv.id = "greetDiv";
   

   // create a div for select boxes
   const selectDiv = document.createElement("div");
   selectDiv.id ="selectDiv";
   

   
   // a div for reset button
   const clearBtnDiv = document.createElement("div");
   clearBtnDiv.id = "clearBtnDiv";
   
   var clearBtn = document.createElement("input");
   clearBtn.onclick = resetAll;
   clearBtn.className = "clearBtn";
   clearBtn.type = "button";
   clearBtn.value = "Reset All";
   

   // create a div for displaying result
   const displayResultDiv = document.createElement("div");
   displayResultDiv.id = "displayResultDiv";

   // display a div for user's selections
   const displaySelecDiv = document.createElement("div");
   displaySelecDiv.id = "displaySelecDiv";
   // create a div for current slections
   const displayCurrentSelec = document.createElement("ul");
   displayCurrentSelec.id = "displayCurrentSelec";
   // create a div for previous selections
   const displayPrevSelec = document.createElement("ul");
   displayPrevSelec.id = "displayPrevSelec";
   // create a div for current select title
   const currentSelecTitle = document.createElement("h3");
   currentSelecTitle.className = "currentSelecTitle";
   //create a div for prev select title
   const prevSelecTitle = document.createElement("h3");
   prevSelecTitle.className = "prevSelecTitle";

   // create a div to store many hearts
   const heartsHome = document.createElement("div");
   heartsHome.id = "heartsHome";

   

   function createSelectElement(dataKey){

       for (var i = 0; i < dataLength; i++) {
   
           // If choice does not match key, skip this data point
           if (choiceData[i].key != dataKey)
               continue;
   
           // Creates a header to label the specific select menu
           var h2 = document.createElement('h2');
           var textNode = document.createTextNode(choiceData[i].prompt);
           h2.className = choiceData[i].depth;
           h2.appendChild(textNode);
           selectDiv.appendChild(h2);

           // Make the left border of h2 flashes
           flashingBorder(h2);
   
           // Creates the select list element
           var selectList = document.createElement('select');
           selectList.id = choiceData[i].key;
           selectList.name = choiceData[i].prompt;
           selectList.className = choiceData[i].depth;
           selectDiv.appendChild(selectList);
   
           // Creates null Select option
           var nullOption = document.createElement('option');
           nullOption.text = "Select an Option";
           nullOption.selected = this;
           nullOption.disabled = true;
           selectList.appendChild(nullOption);                
   
           // Creates option 1
           var newOption1 = document.createElement('option');
           newOption1.value = choiceData[i].option_1;
           newOption1.text = choiceData[i].option_1;
           selectList.appendChild(newOption1);
   
           // Creates option 2
           var newOption2 = document.createElement('option');
           newOption2.value = choiceData[i].option_2;
           newOption2.text = choiceData[i].option_2;
           selectList.appendChild(newOption2);
   
           // Hooks up an event to reload the choices whenever the select value is changed
           //selectList.onchange
           selectList.addEventListener("change", () => {
               var selectt = document.getElementById(dataKey);
               currentSelection = selectt.value;
               selecttClass = selectt.className;
               
               
               //Remove previous result if there's any
               let displayParent = document.querySelector("#displayResultDiv");
               let preDisplay = document.querySelector("p.resultDisplay");
                   if (preDisplay) {
                       displayParent.removeChild(preDisplay);
                   }
               let preDisplayImg = document.querySelector("img.resultDisplay");
               if (preDisplay) {
                   displayParent.removeChild(preDisplayImg);
                   }

               let preDisplayCap = document.querySelector("figcaption.resultDisplay");
               if (preDisplay) {
                   displayParent.removeChild(preDisplayCap);
                   }

               if (document.getElementById("displayCurrentSelec").childNodes.length == 4) {
                   currentToPrev();
               }

                              
               // remove user's old selections
               var currentDisplay = document.getElementById("displayCurrentSelec");
               if (currentDisplay.children.length > 1) {
                   while (currentDisplay.lastChild != currentSelecTitle && currentDisplay.lastChild.className.charCodeAt(0) >= selecttClass.charCodeAt(0)){
                       
                       currentDisplay.lastChild.remove();
                   }                    
               }

               printUserSlections(dataKey,selecttClass);


               // to remove extra selection boxes
               var selectDivv = document.getElementById("selectDiv");
               while (selectDivv.lastChild.className != selecttClass) {
                   selectDivv.lastChild.remove();
               }

               if ( selecttClass == 'c') {
                   window.localStorage.setItem('levelA' , document.querySelector("select.a").value);
                   window.localStorage.setItem('levelB' , document.querySelector("select.b").value);
                   window.localStorage.setItem('levelC' , document.querySelector("select.c").value);
                   var finalSelectA = window.localStorage.getItem('levelA' , document.querySelector("select.a").value);
                   var finalSelectB = window.localStorage.getItem('levelB' , document.querySelector("select.b").value);
                   var finalSelectC = window.localStorage.getItem('levelC' , document.querySelector("select.c").value);
                   
                   showResult(finalSelectA,finalSelectB,finalSelectC);
               }
               
               createSelectElement(currentSelection);
           });
           
       }
   };

   // print out user's current selections
   function printUserSlections(dataKey,i) {
       var valueA = document.getElementById(dataKey);
       var pElement = document.createElement("li");
       pElement.className = i;
       pElement.setAttribute("title", "selected");
       var inPElement = document.createTextNode(valueA.value);
       pElement.appendChild(inPElement);
       displayCurrentSelec.appendChild(pElement);
   }

   // copy current selections to previous selections
   function currentToPrev() {
       let parent = document.querySelector("#displayPrevSelec");           
       while (document.querySelector(".prev")) {
           let pchild = document.querySelector(".prev");
           console.log(parent);
           console.log(pchild);
           parent.removeChild(pchild);
       }
       var x = document.getElementById("displayCurrentSelec");
       for (i = 1; i < x.childNodes.length; i++) {
           var prev = document.createElement("li");
           prev.className = "prev";
           var inPrev = document.createTextNode( String.fromCodePoint(10084) + x.childNodes[i].innerHTML);
           prev.appendChild(inPrev);
           displayPrevSelec.appendChild(prev);
       }
       
   }

   // use local storage to greet the user
   function greetUser() {           
       var userP = document.createElement('p');
       // get the username from local storage
       var username = window.localStorage.getItem('username');
       var userNode = document.createTextNode("Welcome! " + username);
       userP.className = "greet";
       userP.appendChild(userNode);
       greetDiv.appendChild(userP);
   }

   // use user's selection to find the right content, and left border flashes
   function showResult(selectA, selectB, selectC) {
       var display = document.createElement('p');
       display.className = "resultDisplay";
       var displayImg = document.createElement('img');
       displayImg.className = "resultDisplay";
       var displayImgCap = document.createElement('figcaption');
       displayImgCap.className = "resultDisplay";
 
       flashingBorder(rightDiv);

       for (var i = 0; i < resultDataLength; i++) {
           if (resultData[i].levelA == selectA && resultData[i].levelB == selectB && resultData[i].levelC == selectC) {
               var finalResult = resultData[i].material;
               var resultNode = document.createTextNode(finalResult);
               display.appendChild(resultNode);
               displayResultDiv.appendChild(display);

               displayImg.setAttribute("src", resultData[i].image);
               displayImg.setAttribute("width", "300");
               displayImg.setAttribute("alt", "translate");  // need to change this
               displayResultDiv.appendChild(displayImg);

               var capNode = document.createTextNode(resultData[i].caption);
               displayImgCap.appendChild(capNode);
               displayResultDiv.appendChild(displayImgCap);
           }
       }

   }

   // to reset all selection boxes and clear local storage 
   function resetAll() {
    let parentt = document.querySelector("#selectDiv");
     while (parentt.firstChild) {
         parentt.firstChild.remove();
     }    
       
       // clear user slected item div
       var userSelect = document.querySelector("#displayCurrentSelec");
       while(userSelect.firstChild) {
           userSelect.removeChild(userSelect.firstChild);
       }

       // clear the final result div
       var finalresultDiv = document.querySelector("#displayResultDiv");
       while(finalresultDiv.firstChild) {
           finalresultDiv.removeChild(finalresultDiv.firstChild);
       }

       // add title back
       displayCurrentSelec.appendChild(currentSelecTitle);  

       // set the first selectbox to default 
       createSelectElement("Main");

       // clear data in localstorage
       window.localStorage.clear();
   }

   // if the form is empty, validateForm() gives a warning and user stays on the same page
   // if a name is received, validateForm() saves the name to localStorage, 
   // and calls functions to clear the current page and start the selections 
   function validateForm() {
       var namee = document.forms["myForm"]["fname"].value;
       if (namee == "") {
       alert("Please let me know your name. (*ﾟ∀ﾟ*)");
       return false;
       }
       // console.log(x);
       window.localStorage.setItem('username', namee);
       clearForm();
       clearHearts();
       startPage();
    }

    // remove validation form
    function clearForm() {
        document.querySelector("h3").remove();
        document.querySelector("form").remove();
    }

    // remove the animated heart div 
    function clearHearts() {
        document.querySelector("#heartsHome").remove();
    }


    // get the page ready for selections
    function startPage() {
       document.body.append(leftDiv);
       document.body.append(rightDiv);
       header.append(greetDiv);
       leftDiv.append(selectDiv);
       leftDiv.append(clearBtnDiv);
       clearBtnDiv.appendChild(clearBtn);
       leftDiv.append(displaySelecDiv);
       displaySelecDiv.append(displayPrevSelec);
       prevSelecTitle.appendChild(document.createTextNode("Your Previous Selections :"));
       displayPrevSelec.appendChild(prevSelecTitle);
       displaySelecDiv.append(displayCurrentSelec);
       currentSelecTitle.appendChild(document.createTextNode("Your Current Selections :"));
       displayCurrentSelec.appendChild(currentSelecTitle);           
       rightDivTitle.appendChild(document.createTextNode("Your Material :"));           
       rightDiv.appendChild(rightDivTitle);
       rightDiv.append(displayResultDiv);
       greetUser();
       createSelectElement("Main");
    } 
    
    // creat a heart according to the color
    function createHeart(color) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heartsHome.appendChild(heart);
        heart.style.backgroundColor = color;
    }

    
    // append the animated blocks of hearts to the body
    function heartHeartHeart() {
        document.body.appendChild(heartsHome);
        heartBlock();                            
        }

    // create a line of 10 hearts, one after another with 0.5 second delay in 5 different colors
    // parameter k is used to change the starting color     
    function heartLine(k) {
       var k;
       for (i = 0; i< 10; i++) {
           i = i + k;
           var color
           switch (i%5) {
               case 0:
                   color = "#9b5de5"; // Amethyst
                   break;
               case 1:
                   color = "#f15bb5"; // Magenta Crayola
                   break;
               case 2:
                   color = "#fee440"; // Minion Yellow
                   break;
               case 3:
                   color = "#00bbf9"; // Capri
                   break;
               case 4:
                   color = "#00f5d4"; // Sea Green Crayola
                   break;
           
               default:
                   break;
           }
       i = i - k;
       setTimeout(createHeart,500*i, color);

       }

   }

   // use heartLine to create a block of 10*10 hearts
    function heartBlock() {
        for (i = 0; i < 10; i++) {
            setTimeout(heartLine,5000*i,i);
        }
    }

    // Give element x a left border
    function borderUp(x) {
       x.style.borderLeftStyle = 'solid';
       x.style.borderLeftWidth = '5px';
       x.style.borderLeftColor = '#B23A48';
    }

    // remove the border from element x
    function borderDown(x) {
        x.style.border = 'none';
    }

    // element x's left border flashes
    function flashingBorder(x) {
       borderUp(x)
       setTimeout(borderDown, 200,x);
       setTimeout(borderUp, 400, x);
       setTimeout(borderDown, 600, x);

    }
