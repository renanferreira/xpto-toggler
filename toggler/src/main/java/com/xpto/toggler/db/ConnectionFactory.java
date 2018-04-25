package com.xpto.toggler.db;

import org.dizitart.no2.Cursor;
import org.dizitart.no2.Document;
import org.dizitart.no2.Nitrite;
import org.dizitart.no2.NitriteCollection;

public class ConnectionFactory {

	private Nitrite db;

	public ConnectionFactory() {
		db = Nitrite.builder().compressed().filePath("~/db/xpto.db").openOrCreate();
	}
	
	public void insert(String collectionName, Document doc) {
		NitriteCollection collection = db.getCollection(collectionName);
		collection.insert(doc);
	}
	
	public void delete(String collectionName, Document doc) {
		NitriteCollection collection = db.getCollection(collectionName);
		collection.remove(doc);
	}
	
	public void getToggleData() {
		NitriteCollection collection = db.getCollection("toggle");
		Cursor cursor = collection.find();
		
		for(Document document: cursor) {
			System.out.println("Alguma coisa");
		}
	}
	
	public void getUserData() {
		NitriteCollection collection = db.getCollection("user");
		Cursor cursor = collection.find();
		
		for(Document document: cursor) {
			System.out.println("Alguma coisa");
		}
	}

}
