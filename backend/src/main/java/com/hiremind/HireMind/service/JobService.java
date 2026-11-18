package com.hiremind.HireMind.service;

import com.hiremind.HireMind.model.JobPost;
import com.hiremind.HireMind.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;

    public JobPost addJob(JobPost jobPost){
        return jobRepository.save(jobPost);
    }

    public List<JobPost> getAllJobs(){
        return jobRepository.findAll();
    }

    public JobPost getJob(int postId) {
        Optional<JobPost> jp = jobRepository.findById(postId);
        return jp.orElse(new JobPost());
    }

    public void updateJob(JobPost jobPost) {
        jobRepository.save(jobPost);
    }

    public void deleteJob(int postId) {
        jobRepository.deleteById(postId);
    }

    public void load() {
        List<JobPost> jobs = new ArrayList<>(Arrays.asList(
            new JobPost(1,"Java Developer","Must have good knowledge of Spring Boot", 1, new ArrayList<>(Arrays.asList("Java", "Spring Boot", "Hibernate"))),
            new JobPost(2, "Frontend Developer", "Strong experience in React and modern JavaScript", 2, new ArrayList<>(Arrays.asList("JavaScript", "React", "HTML", "CSS"))),
            new JobPost(3, "DevOps Engineer", "Experience with CI/CD pipelines and cloud platforms", 3, new ArrayList<>(Arrays.asList("Docker", "Kubernetes", "AWS", "Jenkins"))),
            new JobPost(4, "Data Analyst", "Good knowledge of SQL and data visualization tools", 2, new ArrayList<>(Arrays.asList("SQL", "Power BI", "Excel", "Python"))),
            new JobPost(5, "Backend Developer", "Experience with REST APIs and Microservices", 1, new ArrayList<>(Arrays.asList("Java", "Spring Boot", "Microservices", "MySQL")))
    ));
        jobRepository.saveAll(jobs);
    }

    public List<JobPost> search(String keyword, String keyword1) {
        return jobRepository.findByPostProfileContainingOrPostDescContaining(keyword,keyword1);
    }
}
