package com.openafm.web.model;

import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Info {
	
	@Id
	private String id;

	@NotNull
	private String name;
	
	@NotNull
	private Integer popularity;
	
	@NotNull
	private String info;
	
	private String img1Url;
	
	private String img2Url;
	
	private String img3Url;
	
	private String extra;
	
	@NotNull
	private String vidUrl;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getPopularity() {
		return popularity;
	}

	public void setPopularity(Integer popularity) {
		this.popularity = popularity;
	}

	public String getInfo() {
		return info;
	}

	public void setInfo(String info) {
		this.info = info;
	}

	public String getImg1Url() {
		return img1Url;
	}

	public void setImg1Url(String img1Url) {
		this.img1Url = img1Url;
	}

	public String getImg2Url() {
		return img2Url;
	}

	public void setImg2Url(String img2Url) {
		this.img2Url = img2Url;
	}

	public String getImg3Url() {
		return img3Url;
	}

	public void setImg3Url(String img3Url) {
		this.img3Url = img3Url;
	}

	public String getExtra() {
		return extra;
	}

	public void setExtra(String extra) {
		this.extra = extra;
	}

	public String getVidUrl() {
		return vidUrl;
	}

	public void setVidUrl(String vidUrl) {
		this.vidUrl = vidUrl;
	}

	public Info() {
		super();
		this.id = null;
		this.name = "";
		this.popularity = 0;
		this.info = "";
		this.img1Url = "";
		this.img2Url = "";
		this.img3Url = "";
		this.extra = "";
		this.vidUrl = "";
	}

	public Info(String id, String name, Integer popularity, String info, String img1Url, String img2Url, String img3Url,
			String extra, String vidUrl) {
		super();
		this.id = id;
		this.name = name;
		this.popularity = popularity;
		this.info = info;
		this.img1Url = img1Url;
		this.img2Url = img2Url;
		this.img3Url = img3Url;
		this.extra = extra;
		this.vidUrl = vidUrl;
	}

	public Info(String name, Integer popularity, String info, String img1Url, String img2Url, String img3Url,
			String extra, String vidUrl) {
		super();
		this.name = name;
		this.popularity = popularity;
		this.info = info;
		this.img1Url = img1Url;
		this.img2Url = img2Url;
		this.img3Url = img3Url;
		this.extra = extra;
		this.vidUrl = vidUrl;
	}

	public Info(String name, String info, String img1Url, String img2Url, String img3Url,
			String extra, String vidUrl) {
		super();
		this.name = name;
		this.popularity = 0;
		this.info = info;
		this.img1Url = img1Url;
		this.img2Url = img2Url;
		this.img3Url = img3Url;
		this.extra = extra;
		this.vidUrl = vidUrl;
	}
	
	public Info(String name, String info, String img1Url) {
		super();
		this.name = name;
		this.info = info;
		this.img1Url = img1Url;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Info other = (Info) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Info [id=" + id + ", name=" + name + ", popularity=" + popularity + ", info=" + info + ", img1Url="
				+ img1Url + ", img2Url=" + img2Url + ", img3Url=" + img3Url + ", extra=" + extra + ", vidUrl=" + vidUrl
				+ "]";
	}
}
	