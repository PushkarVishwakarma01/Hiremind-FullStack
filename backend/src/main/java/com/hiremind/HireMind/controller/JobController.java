package com.hiremind.HireMind.controller;

import com.hiremind.HireMind.model.JobPost;
import com.hiremind.HireMind.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:5173", "https://hiremind.iampushkar.in"})
public class JobController {

    @Autowired
    private JobService jobService;

    @GetMapping(path="/jobPosts", produces = "application/json") // u send the data in a single type
    public List<JobPost> getAllJobs(){
        return jobService.getAllJobs();
    }

    @GetMapping("/jobPost/{postId}")
    public JobPost getJob(@PathVariable("postId") int postId){
        return jobService.getJob(postId);
    }

    @PostMapping("/jobPost") // if u specify what u need
//    @PostMapping(path = "jobPost", consumes = "application/json") // if u specify what u need
    public JobPost addJob(@RequestBody JobPost jobPost){
        System.out.println(jobPost);
        return jobService.addJob(jobPost);
//        return jobService.getJob(jobPost.getPostId());
    }

    @PutMapping("/jobPost")
    public JobPost updateJob(@RequestBody JobPost jobPost){
        jobService.updateJob(jobPost);
        return jobService.getJob(jobPost.getPostId());
    }

    @DeleteMapping("/jobPost/{postId}")
    public String deleteJob(@PathVariable int postId){
        jobService.deleteJob(postId);
        return "deleted";
    }

    @GetMapping("/load")
    public String load(){
        jobService.load();
        return "success";
    }

    @GetMapping("/jobPosts/keyword/{keyword}")
    public List<JobPost> search(@PathVariable("keyword") String keyword){
        return jobService.search(keyword,keyword);
    }
}
