package com.team5.katas.fizz_buzz;

import java.util.Scanner;

public class App {
	public static boolean validInput(String number, int currentNumber, boolean game) {
		int check = currentNumber;
		switch (number) {
		case "fizz":
			if (currentNumber % 3 == 0 && (currentNumber % 5 != 0) && (currentNumber % 7 != 0)) {
				return true;
			} else {
				return false;
			}
		case "buzz":
			if (currentNumber % 5 == 0 && (currentNumber % 3 != 0) && (currentNumber % 7 != 0)) {
				return true;
			} else {
				return false;
			}
		case "pop":
			if (currentNumber % 7 == 0 && (currentNumber % 5 != 0) && (currentNumber % 3 != 0)) {
				return true;
			} else {
				return false;
			}
		case "fizz buzz":
			if ((currentNumber % 3 == 0) && (currentNumber % 5 == 0) && (currentNumber % 7 != 0)) {
				return true;
			} else {
				return false;
			}
		case "fizz pop":
			if ((currentNumber % 3 == 0) && (currentNumber % 7 == 0) && (currentNumber % 5 != 0)) {
				return true;
			} else {
				return false;
			}
		case "buzz pop":
			if ((currentNumber % 5 == 0) && (currentNumber % 7 == 0) && (currentNumber % 3 != 0)) {
				return true;
			} else {
				return false;
			}
		case "fizz buzz pop":
			if ((currentNumber % 3 == 0) && (currentNumber % 5 == 0) && (currentNumber % 7 == 0)) {
				return true;
			} else {
				return false;
			}
		default:
			try {
				if (Integer.parseInt(number) == currentNumber && ((Integer.parseInt(number) % 3 != 0)
						|| (Integer.parseInt(number) % 5 != 0) || (Integer.parseInt(number) % 7 != 0))) {
					return true;
				} else {
					return false;
				}
			} catch (NumberFormatException e) {
				System.out.println("Input incorrecto");
				game = false;
				break;
			}
		}
		return false;
	}

	public static String convertAI(int currentNumber) {
		boolean check;
	}

	public static void main(String[] args) {
		System.out.println("Welcome to Fizz Buzz!");

		boolean game = true;
		int currentNumber = 0;
		String aiAnswer = "";
		String userNumber = "";
		boolean turn = false;
		Scanner sc = new Scanner(System.in);

		while (game == true) {
			if (!turn) {
				currentNumber++;
				
				System.out.println("\n" + currentNumber + "\n");
				turn = true;
			} else {
				System.out.println("Your turn \n");
				userNumber = sc.nextLine();
				currentNumber++;
				if (validInput(userNumber.toLowerCase(), currentNumber, game)) {
					System.out.println();
					userNumber.toLowerCase();
					System.out.println("---------------------------");
					turn = false;
				} else {
					game = false;
				}

			}
		}
		System.out.println("You Lost, better luck next time");
	}
}
