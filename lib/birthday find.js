<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
		<!--meta http-equiv="refresh" content="1"-->
    </head>
    <body>
    	<script>

           /* function person(name,age,color){

            	this.name = name;
            	this.age = age;
            	this.color = color; 
            }

            var p1 = new person("oshada",23,"black");
            var p2 = new person("kasun",12,"brown");

            document.write(p1.name); */

/*
  function person (name, age){
				this.name = name;
				this.age = age;
				this.changeName = function (name) {
					this.name =name;
				}
			}

			var p = new person("David", 21);
			p.changeName("jhon");

			document.write(p.name);         
*/
			
			function person (name, age) {
				this.name = name;
				this.age = age;
				this.yearOfBirth = bornYear;
			}
			
			function bornYear() {
				return 2020 - this.age;
			}

			var p = new person("A", 23);

			document.write(p.yearOfBirth());
			document.write(p.yearOfBirth().length);


info@cnc.mrt.ac.lk

 		</script>
        <nav></nav>


        <input type="submit" name="" value="">
        
    </body>
</html>
