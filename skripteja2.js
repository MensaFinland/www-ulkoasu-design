// <!--

	$(function () {
		//QR-koodi:
		$("#dialog").dialog({ autoOpen: false });
		//Kartta resize:
		$("#mapContainer").resizable({
			helper: "ui-resizable-helper",
			handles: 's, w, sw',
			minHeight: 345,
			minWidth: 235,
			knobHandles: true,
		});
		
		//Posti-lahetys
		$("#wish").submit(function(e){
			e.preventDefault();
			$serdata = $(this).serialize();
			//alert($serdata);
			
			$.ajax({
				cache: false,
				type: 'POST',
				url: 'testikalenteribl.php',
				data: $serdata,
				success: function(data){
					//alert(data);
					if(data=="safty-fail"){
						alert("Vastasit turvakysymykseen v��rin.");
					}else{
						alert("Palaute l�hetetty. Pyrimme vastaamaan toiveeseesi.");
						$("#wish").closest('form').find("input[type=text], textarea").val("");
					}
				},
				error:function(xhr){
					alert("L�hetys ep�onnistui. " + xhr.statusText);
				}                    
				});
		});
	});

	// -->