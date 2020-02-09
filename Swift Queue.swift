//
//  Swift Queue.swift
//  SwiftQueue
//
//  Created by Tarun Bhargava on 24/11/19.
//  Copyright © 2019 random. All rights reserved.
//

import Foundation

struct Queue <T> {
   private var array : [T] = [T]()
   private var startIndex  : Int?
   private var endIndex    : Int?
   //This keeps track of the number of Queue elements(Note that array size can be different than the queue size as we dont
   // remove the elements from array on dequeue but just move our start and end pointers)
   private var size        : Int = 0
    
   var isEmpty : Bool {
        return size == 0
    }
    
   public func peek() -> T? {
        guard !isEmpty,let startIndex = startIndex else {
            return nil
        }
    
        return array[startIndex]
    }
    
   public mutating func enqueue(_ element: T) {
        array.append(element)
        size += 1
       //If an endpoint is there just move it further otherwise point to last element of array we just appended an element to
        if let index = endIndex {
            endIndex   = index + 1
        } else {
            endIndex   = array.count - 1
        }
       //We need to modify startIndex too here as it will be nil when enqueue executes first time 
        startIndex = array.count - size
    }
    
  public mutating func dequeue() -> T? {
        guard !isEmpty,let start = startIndex,let end = endIndex else {
            return nil
        }
        
        let element = array[start]
        size -= 1
      //Move the startIndex further in array if queue is non-empty else set it to nil
        startIndex = isEmpty ? nil : start + 1
       //Set endIndex to nil if queue is empty
        endIndex   = isEmpty ? nil : endIndex
        return element
    }
    
   public func printQueue() {
        guard !isEmpty,let start = startIndex,let end = endIndex else {
            print("Empty Queue")
            return
        }
        for i in start...end {
            print(array[i])
        }
    }
}
