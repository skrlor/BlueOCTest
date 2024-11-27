# Sum of 2 largest elements

def sum_two_largest(lst):
    lst.sort()
    return lst[-1] + lst[-2]

list1 = [1, 4, 2, 3, 5]
print(sum_two_largest(list1))

list2 = [321, 3241, 4532, 432, 3]
print(sum_two_largest(list2))


import unittest

class TestSumTwoLargest(unittest.TestCase):
    def test_positive_numbers(self):
        self.assertEqual(sum_two_largest([1, 4, 2, 3, 5]), 9)
        self.assertEqual(sum_two_largest([321, 3241, 4532, 432, 3]), 7773)

if __name__ == '__main__':
    unittest.main()



