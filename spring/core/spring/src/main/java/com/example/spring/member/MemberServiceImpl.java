package com.example.spring.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MemberServiceImpl implements MemberService {

    //MemberServiceImpl 는 MemberRepository 인터페이스를 의존, MemoryMemberRepository() 구현 클래스도 의존
    // 추상과 구현을 모두 의존하는 좋지 않은 코드
    // -> DIP 위반
//    private final MemberRepository memberRepository = new MemoryMemberRepository();

    private final MemberRepository memberRepository; // 의존 관계
    // final -> 생성자에서만 값을 넣어줄 수 있다.

    @Autowired
    public MemberServiceImpl(MemberRepository memberRepository){
        this.memberRepository = memberRepository;
    }
//   생성자를 통해서 memberRepository 에 어떤 구현체를 사용할 껀지 선택할 것임
// 이젠 구현체는 의존하지 않고 인터페이스만 의존하는 코드가 됨 -> DIP 성립!

    @Override
    public void join(Member member) {
        memberRepository.save(member);
    }

    @Override
    public Member findMember(Long memberId) {
        return memberRepository.findById(memberId);
    }


    //테스트 용도
    public MemberRepository getMemberRepository() {
        return memberRepository;
    }



}
