<?php

		$userid = $_POST["userid"];
		$password = $_POST["password"];
		
		if (empty($password) || empty($userid)) {
			echo "Please fill all the fields.";
		}
		
		echo $password;
		// Connect to the database
		$dsn = "mysql:host=localhost:3306;dbname=test;charset=utf8mb4";
			$username = "root";
			$password_db = "";
			$options = [
				PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
				PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
				PDO::ATTR_EMULATE_PREPARES => false,
			];
			try {
				$pdo = new PDO($dsn, $username, $password_db, $options);
			} catch (PDOException $e) {
				echo "Connection failed: " . $e->getMessage();	
			}
		

		// Prepare the SQL query
		$stmt = $pdo->prepare('SELECT * FROM users WHERE userid = :userid');

		// Bind the parameters and execute the query
		$stmt->execute(['userid' => $userid]);
		$user = $stmt->fetch();
		echo 'user password' . $user['password'];

		// Verify the password
		if ($password == $user['password']) {
			// Login successful
			header('Location: http://localhost:8000/main.html');
		} else {
			// Login failed
			header('Location: register.html');

		// header('Location: index.html');
		exit; 
		
		}
?> 