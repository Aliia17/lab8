$(document).ready(function(){
    answers = ["2009", "Shigeo Katsu", "Hyper Text Markup Language", "Java"];
    questions = ["Which year Nazarbayev University was founded?","Who is President of NU?", "What does HTML stand for", "What programming language is used for web development?"]
    choice_options = [["2009","2010","2011","2012"],["Shigeo Katsu","someone else","someone else1","someone else 2"], ["Hyper Text Markup Language","Hyperlinks and Text Markup Language","Home Tool Markup Language","None of the above"],
["JavaScript","Python","Java","C#"]]
    
    // Generate quiz questions
    // ...
    
    //let quizBox = document.getElementById ("quiz-box"); // JS way
    quizBox = $("#quiz-box"); // Jquery
    quizBox.append ("<div class='question'>"); 
    $('.question').append ("<p class='d'> Q1. Which year Nazarbayev University was founded? </p>");
    $('.question').append ("<label><input type='radio' name='q1' value='a'>2010</label>")
    $('.question').append ("<label><input type='radio' name='q1' value='a'>2009</label>")
    $('.question').append ("<label><input type='radio' name='q1' value='a'>2011</label>")
    $('.question').append ("<label><input type='radio' name='q1' value='a'>2012</label>")

    quizBox.append ("<div class='question1'>"); 
    $('.question1').append ("<p class='d'> Q2. Who is President of NU? </p>");
    $('.question1').append ("<label><input type='radio' name='q2' value='a'>Shigeo Katsu</label>")
    $('.question1').append ("<label><input type='radio' name='q2' value='a'>someone else</label>")
    $('.question1').append ("<label><input type='radio' name='q2' value='a'>someone else 2</label>")
    $('.question1').append ("<label><input type='radio' name='q2' value='a'>someone else 3</label>")

    quizBox.append ("<div class='question2'>"); 
    $('.question2').append ("<p class='d'> Q3. What does HTML stand for </p>");
    $('.question2').append ("<label><input type='radio' name='q3' value='a'>"+ choice_options[2][0] +"</label>")
    $('.question2').append ("<label><input type='radio' name='q3' value='a'>"+ choice_options[2][1] +"</label>")
    $('.question2').append ("<label><input type='radio' name='q3' value='a'>"+ choice_options[2][2] +"</label>")
    $('.question2').append ("<label><input type='radio' name='q3' value='a'>"+ choice_options[2][3] +"</label>")

    quizBox.append ("<div class='question3'>"); 
    $('.question3').append ("<p class='d'> Q4. What programming language is used for web development? </p>");
    $('.question3').append ("<label><input type='radio' name='q4' value='a'>JavaScript</label>")
    $('.question3').append ("<label><input type='radio' name='q4' value='a'>Python</label>")
    $('.question3').append ("<label><input type='radio' name='q4' value='a'>Java</label>")
    $('.question3').append ("<label><input type='radio' name='q4' value='a'>C#</label>")
    
    reset = false;
    
    $("button").click (function (event){
     
         countCorrect = 0;
         $("input[name=q1]").each (function (index){
                choice = $(this).parent().text(); 
                if ($( this ).prop("checked") == true && answers [0] == choice){
                     countCorrect += 1;

                }
         });
          $("input[name=q2]").each (function (index){
          choice = $(this).parent().text(); 
          if ($( this ).prop("checked") == true && answers [1] == choice){
               countCorrect += 1;
               
          }
         });
         $("input[name=q3]").each (function (index){
          choice = $(this).parent().text(); 
          if ($( this ).prop("checked") == true && answers [2] == choice){
               countCorrect += 1;
               
          }
          });
          $("input[name=q4]").each (function (index){
               choice = $(this).parent().text(); 
               if ($( this ).prop("checked") == true && answers [3] == choice){
                    countCorrect += 1;
                    
               }
          });
    $("#quiz-box").append ("<h2>Result of the quiz is: " + countCorrect + "</h2>");
    }); 

});

