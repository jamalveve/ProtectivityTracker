
package com.example.ProductivityTracker.Repository;

import com.example.ProductivityTracker.Entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {

}
