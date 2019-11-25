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
    private var startIndex  : Int = -1
    private var endIndex    : Int = -1
    private var size        : Int = 0
    
    var isEmpty : Bool {
        return size == 0
    }
    
    public func peek() -> T? {
        guard !isEmpty else {
            return nil
        }
    
        return array[startIndex]
    }
    
   public mutating func enqueue(_ element: T) {
        array.append(element)
        size += 1
        endIndex = endIndex + 1
        startIndex = endIndex + 1 - size //This takes care of we not having to worry about initial startindex
    }
    
   public mutating func dequeue() -> T? {
        guard size > 0 else {
            return nil
        }
        
        let element = array[startIndex]
        size -= 1
        startIndex = size == 0 ? endIndex : startIndex + 1 //We have to ensure startindex doesnt get beyond endIndex when last element in queue has been dequeued
        return element
    }
    
   public func printQueue() {
        guard !isEmpty else {
            print("Queue is empty")
            return
        }
        for i in startIndex...endIndex {
            print(array[i])
        }
    }
}
