<?php


		// Retrieve form data
		$name = $_POST["name"];
		$email = $_POST["email"];
		$password = $_POST["password"];		
		$confirm_password = $_POST["confirm_password"];
		$userid = $_POST["userid"];

		// Validate input fields
		if (empty($name) || empty($email) || empty($password) || empty($confirm_password) || empty($userid)) {
			echo "Please fill all the fields.";
		} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
			echo "Invalid email format.";
		} elseif ($password != $confirm_password) {
			echo "Password and confirm password do not match.";
		} else {
			// TODO: Perform database operations to store user data
			

			// Create a PDO connection to the database
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

			// Prepare a SQL statement to insert the user data into the database
			$sql = "INSERT INTO users (name, email, password, userid) VALUES (?, ?, ?, ?)";
			$stmt = $pdo->prepare($sql);

			// Execute the statement with the user data as parameters
			$stmt->execute([$name, $email, $password, $userid]);

			
			echo "Registration successful! \n Thank you for your submission!";
			header('Location: register.html');
			exit; 

		}
	
?> 