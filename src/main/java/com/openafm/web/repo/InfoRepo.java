package com.openafm.web.repo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.openafm.web.model.Info;

@Repository
public class InfoRepo {

	@Autowired 
	MongoTemplate template;

	public Info get(String id) {
		Info info = template.findById(id, Info.class);
		if(info == null || info.getId() == null || info.getId().isEmpty()) {
			Query query = new Query();
			query.addCriteria(Criteria.where("name").is(id));
			info = template.findOne(query, Info.class);
		}
		return info == null? new Info() : info;
	}
	
	public List<Info> find(String q) {
		List<Info> infos = new ArrayList<Info>();
		
		if(q == null || q.isEmpty()) {
			q = "";
		}
		
		Query query = new Query();
		List<Criteria> criterias = new ArrayList<Criteria>();
		criterias.add(Criteria.where("part").regex(q));
		criterias.add(Criteria.where("info").regex(q));
		Criteria criteria = new Criteria().orOperator(criterias.toArray(new Criteria[criterias.size()]));
		query.addCriteria(criteria);

		infos = template.find(query, Info.class);

		return infos;
	}

	public Info save(Info game) {
		template.save(game);
		return game;
	}

	public Info update(Info game) {
		Info g = template.findById(game.getId(), Info.class);
		if(g != null) {
			g.setExtra(game.getExtra());
			g.setImg1Url(game.getImg1Url());
			g.setImg2Url(game.getImg2Url());
			g.setImg3Url(game.getImg3Url());
			g.setInfo(game.getInfo());
			g.setName(game.getName());
			g.setVidUrl(game.getVidUrl());
			template.save(g);
		}
		return g;
	}

}
