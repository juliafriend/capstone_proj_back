package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Outfits {
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private Integer id;

  private String type;

  private String items;

  private String image;


  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public String getItems() {
    return items;
  }

  public void setItems(String items) {
    this.items = items;
  }

  public String getImage() {
    return image;
  }

  public void setImage(String image) {
    this.image = image;
  }

}
