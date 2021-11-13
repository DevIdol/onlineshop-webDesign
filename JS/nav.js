$(document).ready(function(){

		$(window).scroll(function(){
			if($(document).scrollTop()> 50) {
				$('.sticky-top').addClass('mybar');
			}
			else{
				$('.sticky-top').removeClass('mybar');
			}
		});

		$(window).scroll(function(){
			if($(document).scrollTop()> 50) {
				$('.nav, #mainul .down-in').addClass('mybar');
			}
			else{
				$('.nav, #mainul .down-in').removeClass('mybar');
			}
		});



		// disable right click
		$('body').on('contextmenu',function(e){
			return false;
		});

		$('body').on('cut copy paste',function(e){
			e.preventDefault();
		});
		$(window).keydown(function(e){
			if(e.ctrlKey && e.keyCode === 85 ){
				alert("Hey! Don't");
				return false;
			}
		});
		$('.sticky-top a').each(function(){
			// console.log($(this).attr('href'));
			if((window.location.pathname.indexOf($(this).attr('href')))>-1){
				$(this).addClass('activeme');
			}
		});

});

function openul(){
			document.getElementById('mainul').setAttribute('style','display:block;');
			document.getElementById('btn1').style.display="none";
			document.getElementById('btn2').style.display="block";

			
		}

		
		function closeul(){
			document.getElementById('mainul').setAttribute('style','display:none;');
			document.getElementById('btn1').style.display="block";
			document.getElementById('btn2').style.display="none";
		}



function openpre(){
			// document.getElementById('previous').setAttribute('style','display:none;');
			document.getElementById('previous').style.display="none";
			document.getElementById('next').style.display="block";
			document.getElementById('devices').style.display="block";
			document.getElementById('devices1').style.display="none";
			document.getElementById('phdevices').style.display="block";
			document.getElementById('phdevices1').style.display="none";


			
		}

		
function closepre(){
			document.getElementById('next').setAttribute('style','display:none;');
			document.getElementById('previous').style.display="block";
			document.getElementById('next').style.display="none";
			document.getElementById('devices').style.display="none";
			document.getElementById('devices1').style.display="block";
			document.getElementById('phdevices').style.display="none";
			document.getElementById('phdevices1').style.display="block";

		}
