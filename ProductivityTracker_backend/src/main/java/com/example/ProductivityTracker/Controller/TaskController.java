
package com.example.ProductivityTracker.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    private final List<String> tasks = new ArrayList<>();

    // Get all tasks
    @GetMapping
    public List<String> getAllTasks() {
        return tasks;
    }

    // Add a new task
    @PostMapping
    public String addTask(@RequestParam String task) {
        tasks.add(task);
        return "Task added successfully: " + task;
    }

    // Get total number of tasks
    @GetMapping("/count")
    public int getTaskCount() {
        return tasks.size();
    }
}
