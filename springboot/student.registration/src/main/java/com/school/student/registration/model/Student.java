package com.school.student.registration.service;

public class Student {
   private String firstName;
   private String lastName;
   private int rollNo;
   private String emailId;
   private int mobileNo;

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getRollNo() {
        return rollNo;
    }

    public void setRollNo(int rollNo) {
        this.rollNo = rollNo;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public int getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(int mobileNo) {
        this.mobileNo = mobileNo;
    }

    public Student(String firstName, String lastName, int rollNo, String emailId, int mobileNo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.rollNo = rollNo;
        this.emailId = emailId;
        this.mobileNo = mobileNo;
    }
}
