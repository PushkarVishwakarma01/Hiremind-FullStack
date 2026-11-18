package com.hiremind.HireMind.repository;

import com.hiremind.HireMind.model.JobPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Repository
public interface JobRepository extends JpaRepository<JobPost,Integer> {
    List<JobPost> findByPostProfileContainingOrPostDescContaining(String postProfile,String postDesc);
}

//    List<JobPost> jobs = new ArrayList<>(Arrays.asList(
//            new JobPost(1,"Java Developer","Must have good knowledge of Spring Boot", 1, new ArrayList<>(Arrays.asList("Java", "Spring Boot", "Hibernate"))),
//            new JobPost(2, "Frontend Developer", "Strong experience in React and modern JavaScript", 2, new ArrayList<>(Arrays.asList("JavaScript", "React", "HTML", "CSS"))),
//            new JobPost(3, "DevOps Engineer", "Experience with CI/CD pipelines and cloud platforms", 3, new ArrayList<>(Arrays.asList("Docker", "Kubernetes", "AWS", "Jenkins"))),
//            new JobPost(4, "Data Analyst", "Good knowledge of SQL and data visualization tools", 2, new ArrayList<>(Arrays.asList("SQL", "Power BI", "Excel", "Python"))),
//            new JobPost(5, "Backend Developer", "Experience with REST APIs and Microservices", 1, new ArrayList<>(Arrays.asList("Java", "Spring Boot", "Microservices", "MySQL")))
//    ));
//
//    public List<JobPost> getAllJobs(){
//        return jobs;
//    }
//    public void addJob(JobPost jobPost){
//        jobs.add(jobPost);
//        System.out.println(jobs);
//    }
//
//    public JobPost getJob(int postId) {
//        for(JobPost job : jobs){
//            if(job.getPostId()==postId){
//                return job;
//            }
//        }
//        return null;
//    }
//
//    public void updateJob(JobPost jobPost) {
//        for(JobPost jobPost1 : jobs){
//            if(jobPost1.getPostId() == jobPost.getPostId()){
//                jobPost1.setPostProfile(jobPost.getPostProfile());
//                jobPost1.setPostDesc(jobPost.getPostDesc());
//                jobPost1.setReqExperience(jobPost.getReqExperience());
//                jobPost1.setPostTechStack(jobPost.getPostTechStack());
//            }
//        }
//    }
//
//    public void deleteJob(int postId) {
//        for(JobPost jobPost : jobs){
//            if(jobPost.getPostId() == postId){
//                jobs.remove(jobPost);
//            }
//        }
//    }
