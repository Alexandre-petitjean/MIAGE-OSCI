if (me.cardIsPresented === true){
    logger.info("Une carte a été detectée ("+ me.currentCardNumber + ")");
    Array.from(Things["G3.listeEleves"].GetDataTableEntries()).forEach(element => {
        if (element.codeCarte === me.currentCardNumber){
           	logger.info("code  : " + element.codeCarte + "id eleve : " +  element.id);
            Things["G3.listeEleves"].UpdatePresence({
                eleveId: element.id
            });
            logger.info(element.nom + " est présent !");
           	me.LCD_Line1 = element.nom;
        	me.LCD_Line2 = "VALIDE";
            me.BASE_RELAY1 = true;
           	
        } else {
        	logger.error("Carte inconnue ! ID: "+ element.codeCarte);
            me.LCD_Line1 = "CARTE INCONNUE";
        	me.LCD_Line2 = "              ";
            // Malheuresement on a pas de led rouge
        }
        pause(5000);
        me.LCD_Line1 = "READY         ";
        me.LCD_Line2 = "              ";
        me.BASE_RELAY1 = false;
        me.cardIsPresented = false;
        me.currentCardNumber = "";
    });
}