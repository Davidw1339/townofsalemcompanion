<?php
    if($_POST["submit"]){
        if(!$_POST["name"]){
            $error.="<br />Please enter your name.";
        }
        if(!$_POST["email"]){
            $error.="<br />Please enter your email.";
        }
        if(!$_POST["comment"]){
            $error.="<br />Please enter your comment.";
        }
        
        if ($_POST["email"]!="" AND !filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) { 
            $error.="<br />Please enter a valid email address."; 
        }
        if($error){
            $result="<div class='alert alert-danger'><strong>There were error(s) with your form:</strong> $error</div>";
        }   
        else{
            if(mail("contact@salemcompanion.com", "Comment From Town of Salem Companion", "Name: ".$_POST["name"]."
            
            Email: ".$_POST["email"]."
            
            Comment: ".$_POST["comment"])){
                $result="<div class='alert alert-success'><strong>Thank you! Your message was successfully sent.
                We will be in touch.</strong></div>";
            } else {
                $result="<div class='alert alert-danger'><strong>There was an error sending your message.
                Please try again later.</strong></div>";
            }
        }
        
    }
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
 
        <title>Town of Salem Companion</title>
        
        <link href="css/bootstrap.min.css" rel="stylesheet">
        
        <link href="css/custom.css" rel="stylesheet">
        
        <link rel='shortcut icon' href='favicon.ico' type='image/x-icon'/ >
        
        <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
 
        <script src="js/bootstrap.min.js"></script>

        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-78333919-1', 'auto');
          ga('send', 'pageview');

        </script>

        <script src="js/functions.js"></script>
                
                
        <style>
            .center{
                text-align:center;
                margin-top:60px;
            }
            
            .emailf{
                border:1px solid grey;
                border-radius:10px;
            }
            
            textarea{
                resize:none;
                min-height:250px;
            }
            
            .subm{
                margin-bottom:15px;
            }
        </style>
        
    </head>
    
    <body data-spy="scroll" data-target=".navbar-collapse">
        <div class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle Navigation</span>                     
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                     </button>
                     <a href="" class="navbar-brand">Town of Salem Companion</a>
                </div>
                
                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="rankedpractice.html">Ranked Practice</a></li>
                        <li class="active"><a href="contact.php">Contact Us</a></li>
                        <li><a href="donate.html">Donate</a></li>
                        <li><a href="privacypolicy.html">Privacy Policy</a></li>    
                    </ul>
                </div>
            </div>
        </div>
   
        <div class="container">
            <div class="row">
                <div class="center col-md-12 emailf">
                    <h1>Our Contact Form</h1>
                    
                    <?php
                        echo $result;
                    ?>
                    
                    </p class="lead">Send us anything and then we can get in touch.</p>
                    <form method="post">
                        <div class="form-group">
                            <label for="name">Your Name:</label>
                            <input value="<?php echo $_POST["name"]; ?>" placeholder="Your Name"type="text" name="name" class="form-control">
                            </input>
                        </div>
                        <div class="form-group">
                            <label for="email">Your Email:</label>
                            <input value="<?php echo $_POST["email"]; ?>" placeholder="Your Email"type="email" name="email" class="form-control">
                            </input>
                        </div>
                        <div class="form-group">
                            <label for="comment">Your Comment:</label>
                            <textarea placeholder="Your Comment"name="comment" class="form-control"><?php echo $_POST["comment"]; ?></textarea>
                        </div>
                        <input type="submit" name="submit" class="subm btn btn-success" value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
    </body>
    
    <div align="center">
    
    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <!-- Salem Companion -->
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-2083646110024144"
         data-ad-slot="1395350112"
         data-ad-format="auto"></ins>
    <script>
    (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
    
    </div>
    
</html>