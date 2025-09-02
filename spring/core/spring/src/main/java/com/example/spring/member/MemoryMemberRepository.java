package com.example.spring.member;

import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class MemoryMemberRepository implements MemberRepository {

    private static Map<Long,Member> store = new HashMap<>();


    @Override
    public void save(Member member) {
        store.put(member.getId(), member);
//        해쉬에 값 넣기 hash.put()
    }

    @Override
    public Member findById(Long memberId) {
        return store.get(memberId);
//         해쉬의 값 가져오기 hash.get()
    }
}
