package com.example.spring.member;

public interface MemberReopsitory {

    void save(Member member);

    Member findById(Long memberId);

}
