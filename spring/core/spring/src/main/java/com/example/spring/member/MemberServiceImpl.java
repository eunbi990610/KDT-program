package com.example.spring.member;

public class MemberServiceImpl implements MemberService {

    //MemberServiceImpl 는 MemberReopsitory 인터페이스를 의존, MemoryMemberRepository() 구현 클래스도 의존
    // 추상과 구현을 모두 의존하는 좋지 않은 코드
    // -> DIP 위반
    private final MemberReopsitory memberReopsitory = new MemoryMemberRepository();



    @Override
    public void join(Member member) {
        memberReopsitory.save(member);
    }

    @Override
    public Member findMember(Long memberId) {
        return memberReopsitory.findById(memberId);
    }
}
