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
}
