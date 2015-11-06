package com.openafm.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.openafm.web.model.Info;
import com.openafm.web.repo.InfoRepo;


@RestController
public class InfoService {

	@Autowired
	private InfoRepo repo;
	
	@RequestMapping(value="/info/get/{id}", produces = {MediaType.APPLICATION_JSON_VALUE}, method = RequestMethod.GET)
	public @ResponseBody Info get(@PathVariable("id") String id) {
		return repo.get(id);
	}
	
	@RequestMapping(value="/info/find/{q}", produces = {MediaType.APPLICATION_JSON_VALUE}, method = RequestMethod.GET)
	public @ResponseBody List<Info> find(@PathVariable("q") String q) {
		return repo.find(q);
	}
	
	@RequestMapping(value="/info/find", produces = {MediaType.APPLICATION_JSON_VALUE}, method = RequestMethod.GET)
	public @ResponseBody List<Info> find() {
		return repo.find("");
	}
	
	@RequestMapping(value="/info/save", consumes={MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE}, method = RequestMethod.POST)
	public @ResponseBody Info save(@RequestBody Info game) {
		return repo.save(game);
	}
	
	@RequestMapping(value="/info/update", consumes={MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE}, method = RequestMethod.PUT)
	public @ResponseBody Info update(@RequestBody Info game) {
		return repo.update(game);
	}
}
