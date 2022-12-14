package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class PackList {
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private Integer id;

  private String day;

  private String date;

  private String outfitOne;

  private String outfitTwo;

  private String outfitThree;

  private String type;

  private String items;

  private String image;


  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getDay() {
    return day;
  }

  public void setDay(String day) {
    this.day = day;
  }

  public String getDate() {
    return date;
  }

  public void setDate(String date) {
    this.date = date;
  }

  public String getOutfitOne() {
    return outfitOne;
  }

  public void setOutfitOne(String outfitOne) {
    this.outfitOne = outfitOne;
  }

  public String getOutfitTwo() {
    return outfitTwo;
  }

  public void setOutfitTwo(String outfitTwo) {
    this.outfitTwo = outfitTwo;
  }
  
  public String getOutfitThree() {
    return outfitThree;
  }

  public void setOutfitThree (String outfitThree) {
    this.outfitThree = outfitThree;
  }
  public String getType() {
    return type;
  }

  public void setType (String type) {
    this.type = type;
  }
  public String getItems() {
    return items;
  }

  public void setItems (String items) {
    this.items = items;
  }
  public String getImage() {
    return image;
  }

  public void setImage (String image) {
    this.image = image;
  }
}
