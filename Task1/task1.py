# Most frequent string length

from collections import Counter

def most_frequent_length(lst):
    lst_length = []
    for i in range(len(lst)):
        lst_length.append(len(lst[i]))
    
    data = Counter(lst_length)
    most_freq_length = data.most_common(1)[0][0]
    
    lst_most_freq = []
    for i in range(len(lst)):
        if (len(lst[i])==most_freq_length):
            lst_most_freq.append(lst[i])
    
    return lst_most_freq        
    
list1 = ['a', 'ab', 'abc', 'cd', 'def', 'gh']
print(most_frequent_length(list1))   

list2 = ['dsf', 'safjsadf', 'vjshv', 'fasdkfj', 'fsdj', 'vbn']
print(most_frequent_length(list2))


import unittest

class TestMostFrequentStringLengths(unittest.TestCase):
    def test_cases(self):
        self.assertEqual(most_frequent_length(['a', 'ab', 'abc', 'cd', 'def', 'gh']), ['ab', 'cd', 'gh'])
        self.assertEqual(most_frequent_length(['apple', 'bat', 'cat', 'dog', 'egg', 'fog']), ['bat', 'cat', 'dog', 'egg', 'fog'])
        self.assertEqual(most_frequent_length(['']), [''])
        self.assertEqual(most_frequent_length(['a', 'b', 'c', 'dd', 'ee']), ['a', 'b', 'c'])

if __name__ == '__main__':
    unittest.main()