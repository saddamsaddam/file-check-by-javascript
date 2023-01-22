//filecheck
$(document).ready(function(){
	document.getElementById("datePicker").valueAsDate = new Date();
	var count = 1;
	var ln=0;
    document.querySelector("#file-uploadAss").onchange= function(){
   console.log(count);
	if(count>1)
	{		
	 for(var i=0;i<ln;i++)
		{
			var xx="fileremoveAss"+i;
			var ll=document.getElementsByClassName(xx).length;
			for(var j=0;j<ll;j++)
			{
				
	            document.getElementsByClassName(xx)[j].style.display = "none";
			}			
			
		}
	}
	  count++;
	    ln=this.files.length;
	var wrap = document.querySelector("#workAss");
	var len=this.files.length;
              var row = new Array(len);
               var colsm8 = new Array(len);
                var colsm4 = new Array(len);
                  var filename = new Array(len);
                   var h4 = new Array(len);
               
                for(var i=0;i<this.files.length;i++)
                {
			    row[i]=document.createElement('div');
				row[i].className='row';
				row[i].setAttribute('class'," row fileremoveAss"+i)
				row[i].style.marginTop="13px";
				row[i].style.backgroundColor="white";
				row[i].style.borderRadius="5px";
			
				
				colsm8[i]=document.createElement('div');
				colsm8[i].className='col-sm-8';
				 colsm4[i]=document.createElement('div');
				colsm4[i].className='col-sm-4';
				colsm4[i].style.textAlign="right";
				filename[i]=document.createElement('label');
				 filename[i].id='file-nameAss'+i;
				  filename[i].textContent=this.files[i].name;
				h4[i]=document.createElement('h5');
				h4[i].id='crossAss'+i;
				h4[i].setAttribute('class', "btn");
				h4[i].setAttribute('onclick', "fileremoveAss("+i+")");
				h4[i].textContent="x";
				colsm8[i].appendChild(filename[i]);
				colsm4[i].appendChild(h4[i]);					
				row[i].appendChild(colsm8[i]);					
				row[i].appendChild(colsm4[i]);
				wrap.appendChild(row[i]);
			
				
				 }	
		
	
		  appendChild(wrap);		
    
}


});



function fileremove(){
	
	 document.getElementById("workc").style.display = "none";
}

function fileremoveAss(c){
	
	var xx="fileremoveAss"+c;
	document.getElementsByClassName(xx)[document.getElementsByClassName(xx).length-1].style.display = "none";
}
